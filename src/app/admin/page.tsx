"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { supabase, Inquiry } from "@/lib/supabase";
import { Trash2, Eye, Mail, Phone, Calendar } from "lucide-react";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState({ total: 0, new: 0, read: 0, contacted: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      if (supabase) {
        // Load from Supabase
        const { data, error } = await supabase
          .from('inquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setInquiries(data || []);
      } else {
        // Load from localStorage
        const stored = localStorage.getItem('inquiries');
        const data = stored ? JSON.parse(stored) : [];
        setInquiries(data.sort((a: Inquiry, b: Inquiry) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        ));
      }
    } catch (error) {
      console.error('Error loading inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Calculate stats
    const newCount = inquiries.filter(i => i.status === 'new').length;
    const readCount = inquiries.filter(i => i.status === 'read').length;
    const contactedCount = inquiries.filter(i => i.status === 'contacted').length;

    setStats({
      total: inquiries.length,
      new: newCount,
      read: readCount,
      contacted: contactedCount,
    });
  }, [inquiries]);

  const updateStatus = async (id: string, newStatus: 'new' | 'read' | 'contacted') => {
    try {
      if (supabase) {
        const { error } = await supabase
          .from('inquiries')
          .update({ status: newStatus })
          .eq('id', id);

        if (error) throw error;
      } else {
        const updated = inquiries.map(inq =>
          inq.id === id ? { ...inq, status: newStatus } : inq
        );
        localStorage.setItem('inquiries', JSON.stringify(updated));
        setInquiries(updated);
      }

      await loadInquiries();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this inquiry?')) return;

    try {
      if (supabase) {
        const { error } = await supabase
          .from('inquiries')
          .delete()
          .eq('id', id);

        if (error) throw error;
      } else {
        const updated = inquiries.filter(inq => inq.id !== id);
        localStorage.setItem('inquiries', JSON.stringify(updated));
        setInquiries(updated);
      }

      await loadInquiries();
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0 || diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 p-6 flex flex-col">
        <div className="mb-8">
          <Link href="/">
            <h2 className="text-2xl font-bold cursor-pointer hover:text-zinc-300 transition">RAPHAUTOS</h2>
          </Link>
          <p className="text-xs text-zinc-500">Admin Portal</p>
          {!supabase && (
            <p className="text-xs text-amber-500 mt-2">⚠️ Using local storage</p>
          )}
        </div>
        <nav className="space-y-2 flex-1">
          <Link href="/admin" className="block rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white">
            Dashboard
          </Link>
          <Link href="/inventory" className="block rounded-md px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
            View Inventory
          </Link>
          <Link href="/" className="block rounded-md px-4 py-2 text-sm font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white">
            View Site
          </Link>
        </nav>
        <Button
          variant="outline"
          className="w-full mt-auto"
          onClick={loadInquiries}
        >
          Refresh Data
        </Button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-zinc-500">Manage customer inquiries and track engagement</p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-12">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-sm font-medium text-zinc-400">Total Inquiries</h3>
            <p className="mt-2 text-3xl font-bold">{stats.total}</p>
          </div>
          <div className="rounded-xl border border-green-900/50 bg-green-900/20 p-6">
            <h3 className="text-sm font-medium text-green-400">New</h3>
            <p className="mt-2 text-3xl font-bold text-green-300">{stats.new}</p>
          </div>
          <div className="rounded-xl border border-blue-900/50 bg-blue-900/20 p-6">
            <h3 className="text-sm font-medium text-blue-400">Read</h3>
            <p className="mt-2 text-3xl font-bold text-blue-300">{stats.read}</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-sm font-medium text-zinc-400">Contacted</h3>
            <p className="mt-2 text-3xl font-bold">{stats.contacted}</p>
          </div>
        </div>

        {/* Inquiries List */}
        <div>
          <h2 className="text-xl font-bold mb-4">Recent Inquiries</h2>
          {loading ? (
            <div className="text-center py-12 text-zinc-500">Loading...</div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-12 text-zinc-500 border border-zinc-800 rounded-xl">
              No inquiries yet. Inquiries from the contact form will appear here.
            </div>
          ) : (
            <div className="space-y-4">
              {inquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 hover:bg-zinc-900/50 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold">
                          {inquiry.first_name} {inquiry.last_name}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${inquiry.status === 'new'
                              ? 'bg-green-900/30 text-green-400 border border-green-900/50'
                              : inquiry.status === 'read'
                                ? 'bg-blue-900/30 text-blue-400 border border-blue-900/50'
                                : 'bg-zinc-800 text-zinc-400'
                            }`}
                        >
                          {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {inquiry.email}
                        </span>
                        {inquiry.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            {inquiry.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(inquiry.created_at)}
                        </span>
                      </div>
                      {inquiry.car_interest && (
                        <p className="text-sm text-zinc-500 mb-2">
                          <strong>Interested in:</strong> {inquiry.car_interest}
                        </p>
                      )}
                      <p className="text-zinc-300">{inquiry.message}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {inquiry.status === 'new' && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(inquiry.id, 'read')}
                        className="border-zinc-700"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Mark as Read
                      </Button>
                    )}
                    {inquiry.status !== 'contacted' && (
                      <Button
                        size="sm"
                        onClick={() => updateStatus(inquiry.id, 'contacted')}
                        className="bg-green-900/30 text-green-400 hover:bg-green-900/50 border-green-900/50"
                      >
                        Mark as Contacted
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => deleteInquiry(inquiry.id)}
                      className="border-red-900/50 text-red-400 hover:bg-red-900/20 ml-auto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

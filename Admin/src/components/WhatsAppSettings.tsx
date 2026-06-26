import { useState, useEffect } from 'react';
import { Save, RefreshCw, MessageSquare } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

interface Settings {
  admissionTemplate: string;
  internshipTemplate: string;
  chatbotTemplate: string;
}

const TEMPLATE_INFO = [
  {
    key: 'admissionTemplate' as keyof Settings,
    label: 'Admission Form Template',
    description: 'Sent after website form submission for MBA, BBA and other programs.',
    params: '{{1}} = Name   {{2}} = Program   {{3}} = Specialization',
  },
  {
    key: 'internshipTemplate' as keyof Settings,
    label: 'Internship Form Template',
    description: 'Sent after website form submission for Career & Internship Co-Op.',
    params: '{{1}} = Name   {{2}} = Program   {{3}} = Specialization',
  },
  {
    key: 'chatbotTemplate' as keyof Settings,
    label: 'WhatsApp Chatbot Template',
    description: 'Sent when a chatbot conversation is handed off to the CRM (after 30-min idle).',
    params: '{{1}} = Name   {{2}} = Program',
  },
];

export default function WhatsAppSettings() {
  const [settings, setSettings] = useState<Settings>({
    admissionTemplate: '',
    internshipTemplate: '',
    chatbotTemplate: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');

  const fetchSettings = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/whatsapp-settings`);
      const json = await res.json();
      if (json.success) setSettings(json.data);
      else setError('Failed to load settings.');
    } catch {
      setError('Could not reach server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchSettings(); }, []);

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSaved(false);
    try {
      const res = await fetch(`${API_BASE}/whatsapp-settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const json = await res.json();
      if (json.success) {
        setSettings(json.data);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError('Failed to save settings.');
      }
    } catch {
      setError('Could not reach server.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-wine/10 rounded-xl">
              <MessageSquare size={18} className="text-wine" />
            </div>
            <h1 className="text-sm font-black text-black uppercase tracking-widest">WhatsApp Templates</h1>
          </div>
          <p className="text-xs text-zinc-400 font-medium ml-11">Meta-approved template names sent after each lead trigger</p>
        </div>
        <button
          onClick={fetchSettings}
          disabled={loading}
          className="p-2 text-zinc-400 hover:text-wine hover:bg-wine/5 rounded-xl transition-all"
          title="Refresh"
        >
          <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      {error && (
        <div className="mb-6 px-4 py-3 rounded-xl bg-red-50 border border-red-100 text-xs text-red-600 font-semibold">
          {error}
        </div>
      )}

      {/* Template Fields */}
      <div className="space-y-5">
        {TEMPLATE_INFO.map(({ key, label, description, params }) => (
          <div key={key} className="bg-white/70 backdrop-blur-sm border border-border/60 rounded-2xl p-6">
            <label className="block text-[10px] font-black text-wine uppercase tracking-widest mb-1">
              {label}
            </label>
            <p className="text-xs text-zinc-400 mb-1">{description}</p>
            <p className="text-[10px] text-zinc-300 font-mono mb-3">{params}</p>
            <input
              type="text"
              value={settings[key]}
              onChange={e => setSettings(prev => ({ ...prev, [key]: e.target.value }))}
              disabled={loading}
              placeholder="e.g. acknowledgement_applynow"
              className="w-full px-4 py-2.5 rounded-xl border border-border/60 bg-zinc-50 text-xs font-mono text-zinc-800 placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-wine/20 focus:border-wine/40 transition-all disabled:opacity-50"
            />
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving || loading}
          className="flex items-center gap-2 px-6 py-2.5 bg-wine text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-wine/90 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save size={14} />
          {saving ? 'Saving...' : 'Save Templates'}
        </button>
        {saved && (
          <span className="text-xs font-semibold text-emerald-600">
            ✓ Templates saved successfully
          </span>
        )}
      </div>
    </div>
  );
}

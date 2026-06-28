import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import api from '../../../api/axios';
import toast from 'react-hot-toast';

export default function DangerZoneSettings() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  const handleDeleteAccount = async () => {
    if (confirmText !== 'DELETE') return;
    
    toast.loading("PERMANENTLY DELETING ACCOUNT...", { id: "delete-loading" });
    setTimeout(async () => {
      toast.dismiss("delete-loading");
      try {
        const res = await api.post('/user/delete');
        if (res.data.success) {
          toast.success(res.data.message);
          setUser(null);
          navigate('/');
        } else {
          toast.error(res.data.message);
          console.log(res.data.error);
        }
      } catch (e) {
        console.log("Delete account failed: ", e);
        toast.error("Failed to delete account. Please try again.");
      }
    }, 1500);
  };

  return (
    <>
      {/* Danger Zone Card */}
      <section className="glass-panel inner-glow border border-red-500/10 rounded-xl overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-red-500/10 bg-red-500/5">
          <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">dangerous</span>
            Danger Zone
          </h3>
        </div>
        <div className="p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-on-surface">Delete Account Permanently</h4>
              <p className="text-xs text-on-surface-variant">Once you delete your account, there is no going back. Please be certain.</p>
            </div>
            <button 
              onClick={() => setIsDeleteModalOpen(true)}
              className="px-5 py-2.5 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white border border-red-500/30 rounded-xl text-xs font-mono font-bold tracking-wider uppercase active:scale-95 transition-all flex items-center justify-center gap-1.5 shrink-0"
            >
              <span className="material-symbols-outlined text-base">delete_forever</span>
              Delete Account
            </button>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 animate-fade-in">
          <div className="glass-panel inner-glow max-w-md w-full p-6 rounded-2xl border border-red-500/20 shadow-2xl relative space-y-6 text-center animate-scale-up">
            {/* Icon */}
            <div className="mx-auto w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 text-red-500 animate-pulse">
              <span className="material-symbols-outlined text-3xl">warning</span>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-on-surface font-display tracking-wide uppercase">
                Permanently Delete Account?
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                This action is irreversible. All of your habits, daily consistency logs, and performance metrics will be permanently erased.
              </p>
            </div>

            {/* Input Safeguard */}
            <div className="space-y-2 text-left">
              <label className="text-[10px] font-bold text-on-surface-variant/80 uppercase tracking-wider block">
                Type <span className="text-red-500">DELETE</span> to confirm
              </label>
              <input
                type="text"
                value={confirmText}
                onChange={(e) => setConfirmText(e.target.value)}
                placeholder="DELETE"
                className="w-full bg-surface-container-lowest/80 border border-outline-variant rounded-xl px-4 py-2.5 text-sm text-center font-bold tracking-widest text-red-500 placeholder-outline focus:outline-none focus:ring-1 focus:ring-red-500/50"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsDeleteModalOpen(false);
                  setConfirmText("");
                }}
                className="flex-1 px-4 py-2.5 font-mono text-[10px] tracking-widest uppercase border border-outline-variant/30 text-on-surface-variant hover:text-on-surface hover:border-outline-variant rounded-xl transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                disabled={confirmText !== "DELETE"}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-500 disabled:bg-red-950/20 disabled:text-on-surface-variant/40 disabled:border-transparent text-white font-bold rounded-xl text-[10px] font-mono tracking-widest uppercase active:scale-95 transition-all flex items-center justify-center gap-1.5 border border-red-500/30"
              >
                <span className="material-symbols-outlined text-sm">delete_forever</span>
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

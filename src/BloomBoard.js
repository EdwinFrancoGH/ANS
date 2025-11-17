import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BloomBoard() {
  const [progress, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const regar = () => {
    const newValue = Math.min(progress + 10, 100);
    setProgress(newValue);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 700);
  };

  return (
    <div style={{maxWidth:420,margin:'0 auto',background:'#fff',borderRadius:12,padding:18,boxShadow:'0 6px 20px rgba(0,0,0,0.08)',position:'relative'}}>
      <h1 style={{fontSize:20,marginBottom:12}}>BloomBoard</h1>

      <div style={{width:'100%',background:'#e6e6e6',borderRadius:8,height:10,marginBottom:12}}>
        <motion.div
          style={{background:'#22c55e',height:10,borderRadius:8}}
          animate={{ width: progress + "%" }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <p style={{marginBottom:12}}>{progress}% completado</p>

      <button onClick={regar} style={{padding:'8px 14px',background:'#16a34a',color:'#fff',border:'none',borderRadius:8,cursor:'pointer'}}>
        Regar (+10)
      </button>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: -25 }}
            exit={{ opacity: 0, y: -10 }}
            style={{position:'absolute',right:20,top:-10,color:'#16a34a',fontWeight:700}}
          >
            +10
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

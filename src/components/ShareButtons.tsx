"use client";

import React from "react";
import { FaFacebook, FaXTwitter, FaLinkedin, FaReddit, FaWhatsapp, FaTelegram, FaPinterest } from "react-icons/fa6";

type ShareButtonsProps = {
  title: string;
  className?: string;
  buttonClassName?: string;
  size?: number; // px
};

function openCentered(url: string, name: string, w = 520, h = 520) {
  const y = window.top?.outerHeight ? Math.max(0, (window.top.outerHeight - h) / 2) : 0;
  const x = window.top?.outerWidth ? Math.max(0, (window.top.outerWidth - w) / 2) : 0;
  const features = `popup=yes,toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=1,width=${w},height=${h},top=${y},left=${x}`;
  window.open(url, name, features);
}

export default function ShareButtons({ title, className, buttonClassName, size = 24 }: ShareButtonsProps) {
  const onShare = (platform: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const pageUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        break;
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
        break;
      case "reddit":
        shareUrl = `https://www.reddit.com/submit?url=${pageUrl}&title=${text}`;
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${text}%20${pageUrl}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${pageUrl}&text=${text}`;
        break;
      case "pinterest":
        shareUrl = `https://pinterest.com/pin/create/button/?url=${pageUrl}&description=${text}`;
        break;
      default:
        return;
    }
    openCentered(shareUrl, `share-${platform}`);
  };

  const baseBtn = `grid place-items-center rounded-md border border-white/5 hover:border-white/10 bg-white/5 text-zinc-200 hover:text-white`;
  const styleSize: React.CSSProperties = { width: size, height: size };

  return (
    <div className={className}>
      <a aria-label="Share on Facebook" onClick={onShare("facebook")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaFacebook className="size-4" /></a>
      <a aria-label="Share on X" onClick={onShare("x")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaXTwitter className="size-4" /></a>
      <a aria-label="Share on LinkedIn" onClick={onShare("linkedin")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaLinkedin className="size-4" /></a>
      <a aria-label="Share on Reddit" onClick={onShare("reddit")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaReddit className="size-4" /></a>
      <a aria-label="Share on WhatsApp" onClick={onShare("whatsapp")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaWhatsapp className="size-4" /></a>
      <a aria-label="Share on Telegram" onClick={onShare("telegram")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaTelegram className="size-4" /></a>
      <a aria-label="Share on Pinterest" onClick={onShare("pinterest")} href="#" className={`${baseBtn} ${buttonClassName}`} style={styleSize}><FaPinterest className="size-4" /></a>
    </div>
  );
}



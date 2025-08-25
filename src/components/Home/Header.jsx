"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedHoverLink from "../Common/AnimatedMenuLink";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [translateY, setTranslateY] = useState("-500px");

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setTimeout(() => setTranslateY("0px"), 10);
    } else {
      setTranslateY("-500px");
      setTimeout(() => setIsVisible(false), 400);
    }
  }, [open]);

  return (
    <div className="master-navigation">
      <div
        data-animation="default"
        data-collapse="medium"
        data-duration={400}
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="nav-wrapper">
          <div className="left-nav">
            <div className="menu-button w-nav-button">
              <div className="nav-menu-button">
                <div className="menu-open">
                  <div onClick={() => setOpen(!open)} className="icon-menu w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 157 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g mask="url(#mask0_16041_5949)">
                        <path d="M156.765 85.6094H0.0703125V99.8543H156.765V85.6094Z" fill="currentColor" />
                        <path d="M156.765 0.140625H0.0703125V14.3856H156.765V0.140625Z" fill="currentColor" />
                        <path d="M156.765 42.875H0.0703125V57.1199H156.765V42.875Z" fill="currentColor" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="menu-close">
                  <div className="icon-close w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M98.5347 91.4605C98.9994 91.9251 99.368 92.4764 99.6194 93.0837C99.8707 93.6904 100 94.341 100 94.9976C100 95.6549 99.8707 96.3056 99.6194 96.9122C99.368 97.5188 98.9994 98.0708 98.5347 98.5354C98.0708 98.9994 97.5188 99.3681 96.9122 99.6194C96.3049 99.8707 95.6549 100 94.9976 100C94.341 100 93.6903 99.8707 93.083 99.6194C92.4764 99.3681 91.9251 98.9994 91.4605 98.5354L50.0001 57.0686L8.53981 98.5354C7.60166 99.4734 6.32926 100 5.00253 100C3.67574 100 2.40336 99.4734 1.4652 98.5354C0.527052 97.5968 0 96.3249 0 94.9976C0 93.671 0.527052 92.3984 1.4652 91.4605L42.9317 50.0001L1.4652 8.53981C0.527052 7.60166 0 6.32926 0 5.00252C0 3.67579 0.527052 2.40335 1.4652 1.4652C2.40336 0.527045 3.67574 0 5.00253 0C6.32926 0 7.60166 0.527045 8.53981 1.4652L50.0001 42.9318L91.4605 1.4652C92.3984 0.527045 93.671 0 94.9976 0C96.3242 0 97.5968 0.527045 98.5347 1.4652C99.4734 2.40335 100 3.67579 100 5.00252C100 6.32926 99.4734 7.60166 98.5347 8.53981L57.0685 50.0001L98.5347 91.4605Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/" aria-current="page" className="brand-logo w-nav-brand w--current text-2xl font-bold text-center">
              Design and Deliver
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav role="navigation" className="nav-menu w-nav-menu">
            <div className="menu-inner-sticky">
              <div className="nav-link-wrap">
                <AnimatedHoverLink href="/" label="Home" />
              </div>
              <div className="nav-link-wrap">
                <AnimatedHoverLink href="/about" label="About" />
              </div>
              <div className="nav-link-wrap">
                <AnimatedHoverLink href="/services" label="Services" />
              </div>

              {/* NEW: Blog */}
              <div className="nav-link-wrap">
                <AnimatedHoverLink href="/blog" label="Blog" />
              </div>

              {/* NEW: Our Product */}
              <div className="nav-link-wrap">
                <AnimatedHoverLink href="/our-product" label="Our Product" />
              </div>

              <Link href="/contact" target="_blank" className="link-fixed-nav main w-inline-block">
                <div className="button-text-mask small">
                  <div className="button-text-small _1"> Contact</div>
                </div>
              </Link>
            </div>
          </nav>

          <div className="nav-mobile-button">
            <Link href="/contact" className="cta-main w-inline-block">
              <div className="button-text-mask">
                <div className="button-text _1">Contact</div>
              </div>
              <div className="button-bg" />
            </Link>
          </div>
        </div>

        {/* MOBILE OVERLAY */}
        <div
          className="w-nav-overlay"
          data-wf-ignore
          id="w-nav-overlay-0"
          style={{
            height: isVisible ? "100vh" : "0px",
            display: isVisible ? "block" : "none",
            overflow: "hidden",
          }}
        >
          {isVisible && (
            <nav
              role="navigation"
              className="nav-menu w-nav-menu"
              style={{ transition: "transform 400ms ease", transform: `translateY(${translateY})` }}
              data-nav-menu-open
            >
              <div className="menu-inner-sticky">
                <div className="nav-mobile-menu">
                  <Link href="/" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">Home</div>
                  </Link>

                  <Link href="/about" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">About</div>
                  </Link>

                  <Link href="/services" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">Services</div>
                  </Link>

                  {/* NEW: Blog (mobile) */}
                  <Link href="/blog" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">Blog</div>
                  </Link>

                  {/* NEW: Our Product (mobile) */}
                  <Link href="/our-product" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">Our Product</div>
                  </Link>

                  <Link href="/contact" className="nav-mobile-link w-inline-block">
                    <div className="text-h4">Contact</div>
                  </Link>
                </div>

                {/* (rest of your overlay content unchanged) */}
                {/* ... Offerings dropdown, Journal, Contact, CTA, etc ... */}
              </div>
            </nav>
          )}
        </div>
      </div>

      <div className="nav-blur-bg" style={{ display: open ? "flex" : "none", opacity: open ? 1 : 0 }}>
        <div className="overlay-nav-bg" />
      </div>
    </div>
  );
};

export default Header;

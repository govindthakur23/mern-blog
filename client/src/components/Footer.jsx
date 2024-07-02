import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footercom() {
  return (
    <Footer className="border-t-8 border-teal-500 p-3">
      <div className="w-full max-w-7xl mx-auto">  
 
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          {/* logo  */}
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg 
        sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2  bg-gradient-to-r from-indigo-500 via-purple-500
           to-pink-500 rounded-lg text-white"
              >
                Govind's
              </span>
              Blog
            </Link>
          </div>
          {/* items */}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="htttps://www.100jsproject.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Project
                </FooterLink>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Govind's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://github.com/govindthakur23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            href="#"
            by="Govind's blog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <FooterIcon href="#" icon={FaFacebook} />
            <FooterIcon href="#" icon={FaInstagram} />
            <FooterIcon href="#" icon={FaGithub} />
            <FooterIcon href="#" icon={FaLinkedin} />
            <FooterIcon href="#" icon={FaWhatsapp} />
          </div>
        </div>

      </div>
    </Footer>
  );
}

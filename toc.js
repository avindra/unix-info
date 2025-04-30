// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="intro.html"><strong aria-hidden="true">1.</strong> Introduction</a></li><li class="chapter-item expanded "><a href="code/index.html"><strong aria-hidden="true">2.</strong> Source code</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="code/pdp7.html"><strong aria-hidden="true">2.1.</strong> PDP-7 UNIX</a></li></ol></li><li class="chapter-item expanded "><a href="early_history.html"><strong aria-hidden="true">3.</strong> Early history</a></li><li class="chapter-item expanded "><a href="prim/index.html"><strong aria-hidden="true">4.</strong> Primary sources</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="prim/security.html"><strong aria-hidden="true">4.1.</strong> Security</a></li><li class="chapter-item expanded "><a href="prim/userspace.html"><strong aria-hidden="true">4.2.</strong> Userspace</a></li><li class="chapter-item expanded "><a href="prim/man.html"><strong aria-hidden="true">4.3.</strong> Manuals</a></li><li class="chapter-item expanded "><a href="prim/video.html"><strong aria-hidden="true">4.4.</strong> Video productions</a></li><li class="chapter-item expanded "><a href="prim/books.html"><strong aria-hidden="true">4.5.</strong> Books</a></li><li class="chapter-item expanded "><a href="prim/bell.html"><strong aria-hidden="true">4.6.</strong> Bell Labs</a></li><li class="chapter-item expanded "><a href="prim/people.html"><strong aria-hidden="true">4.7.</strong> People</a></li></ol></li><li class="chapter-item expanded "><a href="lang/index.html"><strong aria-hidden="true">5.</strong> Programming languages</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="lang/C.html"><strong aria-hidden="true">5.1.</strong> C</a></li><li class="chapter-item expanded "><a href="lang/S.html"><strong aria-hidden="true">5.2.</strong> S</a></li><li class="chapter-item expanded "><a href="lang/shell.html"><strong aria-hidden="true">5.3.</strong> Shell</a></li><li class="chapter-item expanded "><a href="lang/awk.html"><strong aria-hidden="true">5.4.</strong> AWK</a></li><li class="chapter-item expanded "><a href="lang/regex.html"><strong aria-hidden="true">5.5.</strong> Regular expressions</a></li><li class="chapter-item expanded "><a href="lang/go.html"><strong aria-hidden="true">5.6.</strong> Go</a></li><li class="chapter-item expanded "><a href="lang/compiler.html"><strong aria-hidden="true">5.7.</strong> Compilers</a></li></ol></li><li class="chapter-item expanded "><a href="out_of_tree.html"><strong aria-hidden="true">6.</strong> Out-of-tree developments</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="minix.html"><strong aria-hidden="true">6.1.</strong> Minix</a></li><li class="chapter-item expanded "><a href="9.html"><strong aria-hidden="true">6.2.</strong> Plan 9</a></li></ol></li><li class="chapter-item expanded "><a href="hardware.html"><strong aria-hidden="true">7.</strong> Hardware</a></li><li class="chapter-item expanded "><a href="orgs.html"><strong aria-hidden="true">8.</strong> Organizations</a></li><li class="chapter-item expanded "><a href="courses.html"><strong aria-hidden="true">9.</strong> Courses</a></li><li class="chapter-item expanded "><a href="humor.html"><strong aria-hidden="true">10.</strong> Humor</a></li><li class="chapter-item expanded "><a href="about.html"><strong aria-hidden="true">11.</strong> About</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);

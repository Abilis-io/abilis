function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

var Loader = /*#__PURE__*/function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this.run();
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Loader, [{
    key: "render",
    value: function render() {
      window.addEventListener('load', function () {
        document.querySelector('body').classList.add('loaded');
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Loader;
}(); // eslint-disable-next-line no-unused-vars


new Loader();
var Loader$1 = Loader;

var Accordion = /*#__PURE__*/function () {
  function Accordion(acc, type) {
    _classCallCheck(this, Accordion);

    this.acc = acc;
    this.type = type;
    this.run();
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.acc.forEach(function (accord) {
        var items = accord.querySelectorAll('.accordion-item');
        items.forEach(function (item) {
          var btn = item.querySelector('.accordion-toggle');
          var content = item.querySelector('.accordion-content');
          var scrollHeight = content.scrollHeight;
          window.addEventListener('resize', function () {
            scrollHeight = content.scrollHeight;
          });

          if (item.classList.contains('active')) {
            content.style.height = "".concat(scrollHeight, "px");
            window.addEventListener('resize', function () {
              content.style.height = "".concat(scrollHeight, "px");
            });
          }

          btn.addEventListener('click', function () {
            if (_this.type === 'single') {
              items.forEach(function (itemActive) {
                if (itemActive.classList.contains('active') && itemActive !== item) {
                  var contentActive = itemActive.querySelector('.accordion-content');
                  contentActive.style.height = '0px';
                  itemActive.classList.remove('active');
                }
              });
            }

            if (item.classList.contains('active')) {
              item.classList.remove('active');
              content.style.height = '0px';
            } else {
              item.classList.add('active');
              content.style.height = "".concat(scrollHeight, "px");
            }
          });
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Accordion;
}();

var accordionSingleClass = document.querySelectorAll('.accordion.single');
var accordionMultipleClass = document.querySelectorAll('.accordion.multiple');
new Accordion(accordionSingleClass, 'single');
new Accordion(accordionMultipleClass, 'multiple');
var Accordion$1 = Accordion;

var Close = /*#__PURE__*/function () {
  function Close(container) {
    _classCallCheck(this, Close);

    this.container = container;
    this.run();
  }

  _createClass(Close, [{
    key: "render",
    value: function render() {
      var contain = document.querySelectorAll(this.container);
      contain.forEach(function (e) {
        var btnClose = e.querySelector('[data-close]');

        if (btnClose) {
          btnClose.addEventListener('click', function () {
            e.remove();
          });
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Close;
}();

var Close$1 = Close;

var Alert = /*#__PURE__*/function () {
  function Alert() {
    _classCallCheck(this, Alert);

    this.run();
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Alert, [{
    key: "render",
    value: function render() {
      // eslint-disable-next-line no-unused-vars
      new Close$1('.alert');
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Alert;
}(); // eslint-disable-next-line no-unused-vars


new Alert();
var Alert$1 = Alert;

var Dropdown = /*#__PURE__*/function () {
  function Dropdown() {
    _classCallCheck(this, Dropdown);

    this.run();
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Dropdown, [{
    key: "build",
    value: function build(dropd, button, dropMenu) {
      var dropdown = document.querySelectorAll(dropd);
      dropdown.forEach(function (drop) {
        var btn = drop.querySelector(button);
        var menu = drop.querySelector(dropMenu);

        if (btn && menu) {
          btn.addEventListener('click', function () {
            menu.classList.toggle('active');
          });
          window.addEventListener('click', function (e) {
            if (e.path[0] !== drop && e.path[0] !== btn && e.path[0] !== menu) {
              if (menu.classList.contains('active')) {
                menu.classList.remove('active');
              }
            }
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.build('.dropdown.click', '.navbar-link', '.navbar-dropdown-clicked');
      this.build('.dropdown.dropdown-click', '.button', '.dropdown-menu');
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Dropdown;
}(); // eslint-disable-next-line no-unused-vars


new Dropdown();
var Dropdown$1 = Dropdown;

/* eslint-disable no-unused-expressions */
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);

    this.run();
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Modal, [{
    key: "closeModal",
    value: function closeModal(triggerClose, containerModal) {
      triggerClose.forEach(function (closeBtn) {
        closeBtn.addEventListener('click', function () {
          containerModal.classList.toggle('active');
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var modalTriggers = document.querySelectorAll('.modal-trigger');
      modalTriggers.forEach(function (trigger) {
        var modalContainer = document.querySelector(trigger.dataset.modalTrigger);

        if (modalContainer) {
          var modalClose = modalContainer.querySelectorAll('.close');
          var modalCloseTrigger = modalContainer.querySelectorAll('.modal-trigger');
          trigger.addEventListener('click', function () {
            modalContainer.classList.toggle('active');
          });
          modalCloseTrigger && _this.closeModal(modalCloseTrigger, modalContainer);
          modalClose && _this.closeModal(modalClose, modalContainer);
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Modal;
}(); // eslint-disable-next-line no-unused-vars


new Modal();
var Modal$1 = Modal;

/* eslint-disable no-unused-expressions */

/* eslint-disable class-methods-use-this */
var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);

    this.nav = document.querySelector('#navbar');
    this.navToggles = ['.navbar-toggle-1', '.navbar-toggle-2', '.navbar-toggle-3', '.navbar-toggle-4'];
    this.run();
  }

  _createClass(Navbar, [{
    key: "navDropClick",
    value: function navDropClick(statut, navdrop, dropdown, linked) {
      var link = navdrop.querySelector(linked);
      var drop = navdrop.querySelector(dropdown);

      if (drop && link) {
        if (statut === 'close') {
          if (drop.classList.contains('open')) {
            drop.classList.remove('open');
            link.classList.remove('open');
          }
        } else {
          drop.classList.toggle('open');
          link.classList.toggle('open');
        }
      }
    }
  }, {
    key: "navbarToggle",
    value: function navbarToggle(navToggle) {
      var _this = this;

      navToggle.forEach(function (nav) {
        // MOBILE
        var toggleMenu = document.querySelector(nav.dataset.toggleMenu);
        var navDropdown = document.querySelectorAll('.navbar-menu .navbar-item.dropdown');
        nav.addEventListener('click', function () {
          if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            toggleMenu.classList.remove('open');
            navDropdown.forEach(function (navDrop) {
              if (navDrop.classList.contains('click')) {
                _this.navDropClick('close', navDrop, '.navbar-dropdown-clicked', '.navbar-link');
              } else {
                _this.navDropClick('close', navDrop, '.navbar-dropdown', '.navbar-link');
              }
            });
          } else {
            nav.classList.add('open');
            toggleMenu.classList.add('open');
          }
        });
        var btnClose = toggleMenu.querySelector('.close');

        if (btnClose) {
          btnClose.addEventListener('click', function () {
            toggleMenu.classList.toggle('open');

            if (nav.classList.contains('open')) {
              nav.classList.remove('open');
            }
          });
        } // MOBILE
        // DROPDOWN


        navDropdown.forEach(function (navDrop) {
          navDrop.querySelector('.navbar-link').addEventListener('click', function () {
            if (navDrop.classList.contains('click')) {
              _this.navDropClick('open', navDrop, '.navbar-dropdown-clicked', '.navbar-link');
            } else {
              _this.navDropClick('open', navDrop, '.navbar-dropdown', '.navbar-link');
            }
          });
        }); // DROPDOWN
      });
    }
  }, {
    key: "navbarSticky",
    value: function navbarSticky(navbar) {
      if (navbar) {
        var datasClassBefore = navbar.querySelectorAll('[data-sticky-class-before]');
        var datasClassAfter = navbar.querySelectorAll('[data-sticky-class-after]');

        var stickyClassAction = function stickyClassAction(item, data, type) {
          var classToAdd = data.split(' ');
          classToAdd.forEach(function (e) {
            type === 'add' ? item.classList.add(e) : item.classList.remove(e);
          });
        };

        var stickyClassActionCondition = function stickyClassActionCondition(classType, action) {
          (classType === 'before' ? navbar.dataset.stickyClassBefore : navbar.dataset.stickyClassAfter) ? stickyClassAction(navbar, classType === 'before' ? navbar.dataset.stickyClassBefore : navbar.dataset.stickyClassAfter, action) : '';
          datasClassBefore.forEach(function (e) {
            return stickyClassAction(e, classType === 'before' ? e.dataset.stickyClassBefore : e.dataset.stickyClassAfter, action);
          });
        };

        var classToStickyAction = function classToStickyAction(type) {
          if (type === 'sticky') {
            stickyClassActionCondition('before', 'remove');
            stickyClassActionCondition('after', 'add');
          } else {
            stickyClassActionCondition('before', 'add');
            stickyClassActionCondition('after', 'remove');
          }
        };

        stickyClassActionCondition('before', 'add'); // TYPE 1

        var stickyType = navbar.dataset.stickyType;

        if (stickyType) {
          navbar.classList.add(stickyType);

          var stickyClassToggle = function stickyClassToggle(e, type) {
            var el = type === 'before' ? e.dataset.stickyClassBefore : e.dataset.stickyClassAfter;
            el.split(' ').forEach(function (val) {
              e.classList.toggle(val, type === 'before' ? window.scrollY <= 0 : window.scrollY > 0);
            });
          };

          var stickyPerso = function stickyPerso() {
            navbar.classList.toggle('sticky-active', window.scrollY > 0);
            navbar.dataset.stickyClassBefore ? stickyClassToggle(navbar, 'before') : '';
            datasClassBefore.forEach(function (e) {
              return stickyClassToggle(e, 'before');
            });
            navbar.dataset.stickyClassAfter ? stickyClassToggle(navbar, 'after') : '';
            datasClassAfter.forEach(function (e) {
              return stickyClassToggle(e, 'after');
            });
          };

          if (navbar.dataset.path) {
            var path = navbar.dataset.path.split(' ');
            var url = new URL(document.location.href);
            var isUrlValid = false;
            path.forEach(function (p) {
              if (url.pathname === "/".concat(p)) {
                isUrlValid = true;
                window.addEventListener('scroll', function () {
                  stickyPerso();
                });
              }
            });

            if (!isUrlValid) {
              navbar.classList.add('sticky-active');
              classToStickyAction('sticky');
            }
          } else {
            window.addEventListener('scroll', function () {
              stickyPerso();
            });
          }
        } // TYPE 1
        // TYPE 2


        if (navbar.dataset.stickyTop) {
          var isSticky = false;
          window.addEventListener('scroll', function () {
            if (window.scrollY > navbar.dataset.stickyTop && isSticky === false) {
              navbar.classList.add('sticky');

              if (navbar.dataset.stickyAnimation) {
                navbar.classList.add(navbar.dataset.stickyAnimation);
                setTimeout(function () {
                  navbar.classList.remove(navbar.dataset.stickyAnimation);
                }, 500);
              }

              classToStickyAction('sticky');
              isSticky = true;
            }

            if (window.scrollY < navbar.dataset.stickyTop && isSticky === true) {
              if (navbar.dataset.stickyAnimation) {
                navbar.classList.add(navbar.dataset.stickyAnimation);
                setTimeout(function () {
                  navbar.classList.remove(navbar.dataset.stickyAnimation);
                }, 500);
              }

              navbar.classList.remove('sticky');
              classToStickyAction('top');
              isSticky = false;
            }
          });
        } // TYPE 2

      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.navToggles.forEach(function (navToggle) {
        _this2.navbarToggle(document.querySelectorAll(navToggle));
      });
      this.navbarSticky(this.nav);
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Navbar;
}(); // eslint-disable-next-line no-unused-vars


new Navbar();
var Navbar$1 = Navbar;

/* eslint-disable no-unused-expressions */

/* eslint-disable class-methods-use-this */
var Sidebar = /*#__PURE__*/function () {
  function Sidebar() {
    _classCallCheck(this, Sidebar);

    this.run();
  }

  _createClass(Sidebar, [{
    key: "sideToggelMenu",
    value: function sideToggelMenu(menus) {
      menus.forEach(function (drop) {
        var btn = drop.querySelector('.sidebar-drop-title');
        var menu = drop.querySelector('.sidebar-drop-body');

        if (btn && menu) {
          menu.classList.contains('active') ? btn.classList.add('active') : '';
          btn.classList.contains('active') ? menu.classList.add('active') : '';
          btn.addEventListener('click', function () {
            menu.classList.toggle('active');
            btn.classList.toggle('active');
          });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var sideb = document.querySelectorAll('.sidebar');
      sideb.forEach(function (side) {
        var sideMenus = side.querySelectorAll('.sidebar-drop');
        var sideItems = side.querySelectorAll('a');

        _this.sideToggelMenu(sideMenus);

        window.addEventListener('scroll', function () {
          var current = '';
          sideItems.forEach(function (item) {
            var theHref = document.querySelector(item.dataset.href);

            if (theHref) {
              var element = theHref.getBoundingClientRect();

              if (element.bottom <= window.innerHeight + 100) {
                current = item;
              }
            }
          });
          sideItems.forEach(function (item) {
            if (current && item === current && !item.classList.contains('.active')) {
              item.classList.add('active');
              var sidebarDrop = item.parentNode.parentNode.parentNode;

              if (sidebarDrop.classList.contains('sidebar-drop')) {
                var btnDrop = sidebarDrop.querySelector('.sidebar-drop-title');
                var menuDrop = sidebarDrop.querySelector('.sidebar-drop-body');
                btnDrop.classList.add('active');
                menuDrop.classList.add('active');
              }
            } else if (!item.classList.contains('sidebar-drop-title')) {
              item.classList.remove('active');
            }
          });
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Sidebar;
}(); // eslint-disable-next-line no-unused-vars


new Sidebar();
var Sidebar$1 = Sidebar;

/* eslint-disable class-methods-use-this */
var Tab = /*#__PURE__*/function () {
  function Tab() {
    _classCallCheck(this, Tab);

    this.run();
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      var tabs = document.querySelectorAll('.tabs');
      tabs.forEach(function (e) {
        var tabTitles = e.querySelectorAll('.tab .tab-title');
        var isActive = false;
        tabTitles.forEach(function (title) {
          if (!isActive && title) {
            if (title.classList.contains('active')) {
              isActive = true;
            }
          }
        });

        if (!isActive && tabTitles[0]) {
          tabTitles[0].classList.add('active');
        }

        tabTitles.forEach(function (title) {
          var activeClass = title.dataset.active;

          if (activeClass) {
            activeClass.split(' ').forEach(function (activeclass) {
              if (title.classList.contains('active')) {
                title.classList.add(activeclass);
              }
            });
          }
        });
        tabTitles.forEach(function (title) {
          var target = title.dataset.target;

          if (target && title) {
            var targetEl = e.querySelector(target);
            title.addEventListener('click', function () {
              var activeClass = title.dataset.active;
              title.classList.add('active');
              targetEl.classList.add('active');

              if (activeClass) {
                activeClass.split(' ').forEach(function (activeclass) {
                  title.classList.add(activeclass);
                });
              }

              tabTitles.forEach(function (tactive) {
                if (tactive !== title) {
                  if (tactive.classList.contains('active')) {
                    tactive.classList.remove('active');
                    e.querySelector(tactive.dataset.target).classList.remove('active');
                  }

                  var activeClassVerif = tactive.dataset.active;

                  if (activeClassVerif) {
                    activeClassVerif.split(' ').forEach(function (activeclass) {
                      if (!tactive.classList.contains('active')) {
                        tactive.classList.remove(activeclass);
                      }
                    });
                  }
                }
              });
            });

            if (title && targetEl) {
              if (title.classList.contains('active')) {
                targetEl.classList.add('active');
              } else if (targetEl.classList.contains('active')) {
                targetEl.classList.remove('active');
              }
            }
          }
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Tab;
}(); // eslint-disable-next-line no-unused-vars


new Tab();
var Tab$1 = Tab;

var Tag = /*#__PURE__*/function () {
  function Tag() {
    _classCallCheck(this, Tag);

    this.run();
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      new Close$1('.tag');
      new Close$1('.tags');
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Tag;
}();

new Tag();
var Tag$1 = Tag;

/* eslint-disable class-methods-use-this */
var Toast = /*#__PURE__*/function () {
  function Toast() {
    _classCallCheck(this, Toast);

    this.run();
  }

  _createClass(Toast, [{
    key: "render",
    value: function render() {
      var button = document.querySelectorAll('.button-toast');
      button.forEach(function (btn) {
        var toast = document.querySelector(btn.dataset.target);
        var close = toast.querySelector('.close');
        var progress = toast.querySelector('.toast-progress');
        btn.addEventListener('click', function () {
          toast.classList.add('active');
          progress.classList.add('active'); // eslint-disable-next-line max-len

          var time = 5000; // 5s -> utils/variables/_toast.scss -> $toast-progress-animation-duration

          setTimeout(function () {
            toast.classList.remove('active');
          }, time);
          setTimeout(function () {
            progress.classList.remove('active');
          }, time + 300);
        });
        close.addEventListener('click', function () {
          toast.classList.remove('active');
          setTimeout(function () {
            progress.classList.remove('active');
          }, 300);
        });
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Toast;
}(); // eslint-disable-next-line no-unused-vars


new Toast();
var Toast$1 = Toast;

/* eslint-disable class-methods-use-this */
var ToTop = /*#__PURE__*/function () {
  function ToTop() {
    _classCallCheck(this, ToTop);

    this.run();
  }

  _createClass(ToTop, [{
    key: "render",
    value: function render() {
      var btn = document.querySelector('#to-top');

      if (btn) {
        window.addEventListener('scroll', function () {
          // eslint-disable-next-line radix
          if (window.scrollY > parseInt(btn.dataset.top)) {
            btn.classList.add('show');
          } else {
            btn.classList.remove('show');
          }
        });
        btn.addEventListener('click', function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
      }
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return ToTop;
}(); // eslint-disable-next-line no-unused-vars


new ToTop();
var ToTop$1 = ToTop;

/* eslint-disable class-methods-use-this */

/* eslint-disable no-param-reassign */
var Lazyload = /*#__PURE__*/function () {
  function Lazyload() {
    _classCallCheck(this, Lazyload);

    this.run();
  }

  _createClass(Lazyload, [{
    key: "render",
    value: function render() {
      var images = document.querySelectorAll('.lazyload');

      var loadImages = function loadImages(imgs) {
        imgs.forEach(function (img) {
          var src = img.dataset.src;
          if (!src) return;
          img.src = src;
        });
      };

      if (!window.IntersectionObserver) {
        loadImages(images);
        return;
      } // Observer options.


      var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7
      };

      var callback = function callback(entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          var src = entry.target.dataset.src;
          if (!src) return;
          entry.target.src = src;
        });
      };

      var observer = new IntersectionObserver(callback, options); // Start observe

      images.forEach(function (image) {
        observer.observe(image);
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return Lazyload;
}(); // eslint-disable-next-line no-unused-vars


new Lazyload();
var Lazyload$1 = Lazyload;

var File = /*#__PURE__*/function () {
  function File() {
    _classCallCheck(this, File);

    this.run();
  } // eslint-disable-next-line class-methods-use-this


  _createClass(File, [{
    key: "render",
    value: function render() {
      var files = document.querySelectorAll('.file');
      files.forEach(function (file) {
        var fileInput = file.querySelector('input[type=file]');
        var fileName = file.querySelector('.file-name');

        if (fileName != null) {
          fileInput.addEventListener('change', function () {
            if (fileInput.files.length > 0) {
              fileName.textContent = fileInput.files[0].name;
            }
          });
        }
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.render();
    }
  }]);

  return File;
}(); // eslint-disable-next-line no-unused-vars


new File();
var File$1 = File;

export { Accordion$1 as Accordion, Alert$1 as Alert, Dropdown$1 as Dropdown, File$1 as File, Lazyload$1 as Lazyload, Loader$1 as Loader, Modal$1 as Modal, Navbar$1 as Navbar, Sidebar$1 as Sidebar, Tab$1 as Tab, Tag$1 as Tag, ToTop$1 as ToTop, Toast$1 as Toast };

(function() {
  var showLoginForm = function() {
    var loginPopup = document.createElement('div');
    loginPopup.id = 'customer-login-popup';
    loginPopup.innerHTML = `
      <div class="customer-login-popup-overlay">
        <div class="customer-login-popup-content">
          {{ 'customer.css' | asset_url | stylesheet_tag }}
          {%- style -%}
            .section-{{ section.id }}-padding {
              padding-top: {{ section.settings.padding_top | times: 0.75 | round: 0 }}px;
              padding-bottom: {{ section.settings.padding_bottom | times: 0.75 | round: 0 }}px;
            }
          
            @media screen and (min-width: 750px) {
              .section-{{ section.id }}-padding {
                padding-top: {{ section.settings.padding_top }}px;
                padding-bottom: {{ section.settings.padding_bottom }}px;
              }
            }
          {%- endstyle -%}
          
          <div class="customer login section-{{ section.id }}-padding">
            <h1 id="recover" tabindex="-1">
              {{ 'customer.recover_password.title' | t }}
            </h1>
            <div>
              <p>
                {{ 'customer.recover_password.subtext' | t }}
              </p>
          
              {%- form 'recover_customer_password' -%}
                {% assign recover_success = form.posted_successfully? %}
                <div class="field">
                  <input
                    type="email"
                    value=""
                    name="email"
                    id="RecoverEmail"
                    autocorrect="off"
                    autocapitalize="off"
                    autocomplete="email"
                    {% if form.errors %}
                      aria-invalid="true"
                      aria-describedby="RecoverEmail-email-error"
                      autofocus
                    {% endif %}
                    placeholder="{{ 'customer.login_page.email' | t }}"
                  >
                  <label for="RecoverEmail">
                    {{ 'customer.login_page.email' | t }}
                  </label>
                </div>
                {%- if form.errors -%}
                  <small id="RecoverEmail-email-error" class="form__message">
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 13 13">
                      <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
                      <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
                      <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
                      <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                    </svg>
                    {{ form.errors.messages.form }}
                  </small>
                {%- endif -%}
          
                <button>
                  {{ 'customer.login_page.submit' | t }}
                </button>
          
                <a href="#login">
                  {{ 'customer.login_page.cancel' | t }}
                </a>
              {%- endform -%}
            </div>
          
            <h1 id="login" tabindex="-1">
              {{ 'customer.login_page.title' | t }}
            </h1>
            <div>
              {%- if recover_success == true -%}
                <h3 class="form__message" tabindex="-1" autofocus>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 13 13">
                    <path d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z" fill="#428445" stroke="white" stroke-width="0.7"/>
                    <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white"/>
                    <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white">
                  </svg>
                  {{ 'customer.recover_password.success' | t }}
                </h3>
              {%- endif -%}
              {%- form 'customer_login', novalidate: 'novalidate' -%}
                {%- if form.errors -%}
                  <h2 class="form__message" tabindex="-1" autofocus>
                    <span class="visually-hidden">{{ 'accessibility.error' | t }} </span>
                    <svg aria-hidden="true" focusable="false" viewBox="0 0 13 13">
                      <circle cx="6.5" cy="6.50049" r="5.5" stroke="white" stroke-width="2"/>
                      <circle cx="6.5" cy="6.5" r="5.5" fill="#EB001B" stroke="#EB001B" stroke-width="0.7"/>
                      <path d="M5.87413 3.52832L5.97439 7.57216H7.02713L7.12739 3.52832H5.87413ZM6.50076 9.66091C6.88091 9.66091 7.18169 9.37267 7.18169 9.00504C7.18169 8.63742 6.88091 8.34917 6.50076 8.34917C6.12061 8.34917 5.81982 8.63742 5.81982 9.00504C5.81982 9.37267 6.12061 9.66091 6.50076 9.66091Z" fill="white"/>
                      <path d="M5.87413 3.17832H5.51535L5.52424 3.537L5.6245 7.58083L5.63296 7.92216H5.97439H7.02713H7.36856L7.37702 7.58083L7.47728 3.537L7.48617 3.17832H7.12739H5.87413ZM6.50076 10.0109C7.06121 10.0109 7.5317 9.57872 7.5317 9.00504C7.5317 8.43137 7.06121 7.99918 6.50076 7.99918C5.94031 7.99918 5.46982 8.43137 5.46982 9.00504C5.46982 9.57872 5.94031 10.0109 6.50076 10.0109Z" fill="white" stroke="#EB001B" stroke-width="0.7">
                    </svg>
                    {{ 'templates.contact.form.error_heading' | t }}
                  </h2>
                  {{ form.errors | default_errors }}
                {%- endif -%}
          
                <div class="field">
                  <input
                    type="email"
                    name="customer[email]"
                    id="CustomerEmail"
                    autocomplete="email"
                    autocorrect="off"
                    autocapitalize="off"
                    {% if form.errors contains 'form' %}
                      aria-invalid="true"
                    {% endif %}
                    placeholder="{{ 'customer.login_page.email' | t }}"
                  >
                  <label for="CustomerEmail">
                    {{ 'customer.login_page.email' | t }}
                  </label>
                </div>
          
                {%- if form.password_needed -%}
                  <div class="field">
                    <input
                      type="password"
                      value=""
                      name="customer[password]"
                      id="CustomerPassword"
                      autocomplete="current-password"
                      {% if form.errors contains 'form' %}
                        aria-invalid="true"
                      {% endif %}
                      placeholder="{{ 'customer.login_page.password' | t }}"
                    >
                    <label for="CustomerPassword">
                      {{ 'customer.login_page.password' | t }}
                    </label>
                  </div>
          
                  <a href="#recover">
                    {{ 'customer.login_page.forgot_password' | t }}
                  </a>
                {%- endif -%}
          
                <button>
                  {{ 'customer.login_page.sign_in' | t }}
                </button>
          
                <a href="{{ routes.account_register_url }}">
                  {{ 'customer.login_page.create_account' | t }}
                </a>
              {%- endform -%}
            </div>
          
            {%- if shop.checkout.guest_login -%}
              <div>
                <hr>
                <h2>{{ 'customer.login_page.guest_title' | t }}</h2>
          
                {%- form 'guest_login' -%}
                  <button>
                    {{ 'customer.login_page.guest_continue' | t }}
                  </button>
                {%- endform -%}
              </div>
            {%- endif -%}
          </div>
          
          {% schema %}
          {
            "name": "t:sections.main-login.name",
            "settings": [
              {
                "type": "header",
                "content": "t:sections.all.padding.section_padding_heading"
              },
              {
                "type": "range",
                "id": "padding_top",
                "min": 0,
                "max": 100,
                "step": 4,
                "unit": "px",
                "label": "t:sections.all.padding.padding_top",
                "default": 36
              },
              {
                "type": "range",
                "id": "padding_bottom",
                "min": 0,
                "max": 100,
                "step": 4,
                "unit": "px",
                "label": "t:sections.all.padding.padding_bottom",
                "default": 36
              }
            ]
          }
          {% endschema %}

        </div>
      </div>
    `;

    document.body.appendChild(loginPopup);
  };

  var openLoginPopup = function() {
    showLoginForm();
  };

  document.addEventListener('DOMContentLoaded', function() {
    openLoginPopup();
  });
})();

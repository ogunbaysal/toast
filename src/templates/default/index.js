import './default.css'
let createTemplate = (toast, config) => {
  console.log(config);
    return `
        <div class="toast fade show ${ toast.types[config.type] }" role="alert" aria-live="assertive" aria-atomic="true">
                    ${
                        config.displayHeader ?
                            `<div class="toast-header">
<!--                                <img src="assets/images/logo-sm.png" alt="" height="20" class="me-1">-->
                                <h5 class="me-auto my-0">${config.title}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>` : ''
                    }
                    <div class="toast-body ">${ config.html ? config.html : config.text }
                        ${
                            config.buttons && config.buttons.length > 0 ?
                                `<div class="mt-2 pt-2 border-top">
                                    ${
                                        config.buttons.map(button => {
                                            return `<button type="button" onclick="button.click ? button.click : null" class="btn btn-${ button.type ? button.type : 'primary' } btn-sm">${ button.content ? button.content: button.text }</button>`;
                                        })
                                    }
                                  </div>` : ''
                        }
                    </div>
                </div>
    `
}

export default createTemplate;

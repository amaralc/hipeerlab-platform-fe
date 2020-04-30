import React, { Component } from 'react';

// import { Container } from './styles';

export default class Drop extends Component {
  render() {
    return <form id="app-cover">
    <div id="select-box">
            <input type="checkbox" id="options-view-button">
            <div id="select-button" class="brd">
                    <div id="selected-value">
                        <span>Select a platform</span>
                    </div>
                    <div id="chevrons">
                            <i class="fas fa-chevron-up"></i>
                            <i class="fas fa-chevron-down"></i>
                    </div>
            </div>
            <div id="options">
                    <div class="option">
                            <input class="s-c top" type="radio" name="platform" value="codepen">
                            <input class="s-c bottom" type="radio" name="platform" value="codepen">
                            <i class="fab fa-codepen"></i>
                            <span class="label">Produção</span>
                            <span class="opt-val">Produção</span>
                    </div>
                    <div class="option">
                            <input class="s-c top" type="radio" name="platform" value="dribbble">
                            <input class="s-c bottom" type="radio" name="platform" value="dribbble">
                            <i class="fab fa-dribbble"></i>
                            <span class="label">Finanças</span>
                            <span class="opt-val">Finanças</span>
                    </div>
                    <div id="option-bg"></div>
            </div>
    </div>
</form>;
  }
}

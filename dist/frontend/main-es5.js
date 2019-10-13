(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/algorithms/algorithms.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/algorithms/algorithms.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"columns\">\n        <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n            <div class=\"container\">\n                <div class=\"columns\">\n                    <div class=\"column\">\n                        <div class=\"text-center\" *ngIf=\"!full\">\n                            <a class=\"btn btn-primary edit-action mt-1\" *ngIf=\"!editing\" [routerLink]=\"'/algorithms/new'\" (click)=\"startEdit()\">新增</a>\n                            <a class=\"btn edit-action mt-1 \" *ngIf=\"!editing \" (click)=\"startEdit()\">編輯</a>\n                            <a class=\"btn edit-action mt-1 \" *ngIf=\"editing \" (click)=\"toggleExample() \">檢視範例</a>\n                            <a class=\"btn btn-success edit-action mt-1 \" *ngIf=\"editing \" (click)=\"finishEdit() \">完成</a>\n                            <a class=\"btn btn-error edit-action mt-1 \" *ngIf=\"editing \" (click)=\"discardEdit() \">放棄</a>\n                        </div>\n                        <ul class=\"menu menu-nav\" *ngIf=\"!editing\">\n                            <li class=\"menu-item \" *ngFor=\"let algorithm of algorithms;\">\n                                <a [routerLink]=\" '/algorithms/' + algorithm.id\" fragment=\"all\" *ngIf=\"full\">{{ algorithm.abbreviation }}</a>\n                                <a [routerLink]=\" '/algorithms/' + algorithm.id \" *ngIf=\"!full\">{{ algorithm.abbreviation }}</a>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"divider-vert \"></div>\n                    <div class=\"column col-9 \">\n                        <app-algorithm-form [editing]=\"editing \" [(algorithmData)]=\"algorithm \" #form></app-algorithm-form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal modal-sm \" [class.active]=\"discardPrompt \">\n    <a class=\"modal-overlay \" aria-label=\"close \"></a>\n    <div class=\"modal-container text-center \">\n        <div class=\"modal-body \">\n            <p>你確定要放棄本次編輯嗎？</p>\n            <button class=\"btn btn-primary \" (click)=\"discardEditConfirm() \">確定</button>\n            <button class=\"btn mx-1 \" (click)=\"discardEditCancel() \">返回</button>\n        </div>\n    </div>\n</div>\n<app-algorithm-example draggable=\"true \" [style.left.%]=\"example ? 0 : -40 \" [(example)]=\"example \"></app-algorithm-example>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/algorithms/example/example.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/algorithms/example/example.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel bg-light\">\n    <a class=\"btn btn-clear\" (click)=\"exampleChange.emit(false)\"></a>\n    <div class=\"panel-header text-center\">\n        <div class=\"panel-title h3\">Discourse</div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">1. 完整 App 標題</div>\n                <div class=\"tile-subtitle\">A Unified RvNN Framework for End-to-End Chinese Discourse Parsing</div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">2. App 縮寫</div>\n                <div class=\"tile-subtitle\">Discourse</div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">3. 作者</div>\n                <div class=\"tile-subtitle\">\n                    <span class=\"chip\">\n                        Chuan-An Lin\n                    </span>\n                    <span class=\"chip\">\n                        Hen-Hsen Huang\n                    </span>\n                    <span class=\"chip\">\n                        Zi-Yuan Chen\n                    </span>\n                    <span class=\"chip\">\n                        Hsin-Hsi Chen\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">4. 單位</div>\n                <div class=\"tile-subtitle\">\n                    <span class=\"chip\">\n                        台灣大學資訊系\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">5. 計畫隸屬於</div>\n                <div class=\"tile-subtitle\">c. 科技部人工智慧普適研究中心-交大人工智慧中心</div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">6. 問題回報聯絡 Email</div>\n                <div class=\"tile-subtitle\">hhhuang@nlg.csie.ntu.edu.tw</div>\n            </div>\n        </div>\n        <div class=\"\">\n            <div class=\"text-bold\">7. 功能描述</div><br>\n            <markdown>\n                中文語篇剖析有四項子任務，包含初級語篇單元分割、 剖析樹建立、主次關係識別、語篇關係辨識等。 本文展示一個點對點中文語篇剖析器，並提出一套統一架構， 可以對輸入之中文篇章直接產生完整的中文語篇剖析結果。 我們的剖析器以遞迴類神經網路為基礎，同時對四項子任務進行學習， 在中文語篇樹庫(CDTB)資料集上，達到最先進的效能。 我們釋出了這個剖析器的原始碼與預先訓練完成的模型， 立即可用。據我們所知，這是第一個開放原始碼的中文剖析工具集， 而且這套獨立的工具集不須依賴外部資源(如句法剖析器)， 便於下游應用的整合。 \n            </markdown>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">8. Keyword</div>\n                <div class=\"tile-subtitle\">\n                    <span class=\"chip\">\n                        Chinese discourse parser \n                    </span>\n                    <span class=\"chip\">\n                        中文語篇剖析器\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">9. 程式會使用到的 NN(Neural Network) Toolkit & NN類別 </div>\n                <div class=\"tile-subtitle\">\n                    <span class=\"chip\">\n                        NLP \n                    </span>\n                    <span class=\"chip\">\n                        遞迴類神經網路\n                    </span>\n                    <span class=\"chip\">\n                        Discourse\n                    </span>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">10. 參考連結 URL/GitHub </div>\n                <div class=\"tile-subtitle\">http://nlg18.csie.ntu.edu.tw/discourse_parser</div>\n                <div class=\"tile-subtitle\">http://aclweb.org/anthology/C18-2016</div>\n                <div class=\"tile-subtitle\">https://github.com/abccaba2000/discourse-parser</div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered \">\n            <div class=\"tile-content \">\n                <div class=\"tile-title text-bold \">\n                    11. 程式會使用到的資料集（可參考範例）\n                </div>\n                <div class=\"tile-content \">\n                    <div class=\"card my-2\">\n                        <div class=\"card-body\">\n                            <p>名稱：中文語篇樹庫（CDTB）</p>\n                            <p>連結：www.cs.brandeis.edu/~clp/cdtb/</p>\n                            <span>描述：</span>\n                            <markdown></markdown>\n                            <div class=\"form-group\"><label class=\"form-label\">是否免費使用：是</label></div>\n                            <div class=\"form-group\"><label class=\"form-label\">是否開放授權：是</label></div>\n                            <markdown></markdown>\n                        </div>\n                    </div>\n                    <div class=\"card-body\">\n                        <p>名稱：WordNet</p>\n                        <p>連結：https://wordnet.princeton.edu/</p>\n                        <span>描述：</span>\n                        <markdown></markdown>\n                        <div class=\"form-group\"><label class=\"form-label\">是否免費使用：是</label></div>\n                        <div class=\"form-group\"><label class=\"form-label\">是否開放授權：是</label></div>\n                        <markdown></markdown>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered \">\n            <div class=\"tile-content \">\n                <div class=\"tile-title text-bold \">12. 可供程式 (App) 選擇的參數</div>\n                <div class=\"tile-content \">\n                    <table class=\"table table-striped table-hover \">\n                        <thead>\n                            <tr>\n                                <th>變數名稱</th>\n                                <th style=\"width: 60%; \">說明</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>demo</td>\n                                <td>\n                                    <markdown>畫出HTML圖檔</markdown>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>r</td>\n                                <td>\n                                    <markdown>調整樹的深度</markdown>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">13. 程式 (App) 輸入格式（image, text, speech or ...)</div>\n                <div class=\"tile-subtitle\"><code>text/plain</code></div>\n            </div>\n        </div>\n        <div class=\"tile tile-centered\">\n            <div class=\"tile-content\">\n                <div class=\"tile-title text-bold\">. 程式 (App) 輸出格式（image, text, speech or ...)</div>\n                <div class=\"tile-subtitle\"><code>text/html</code></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/algorithms/form/form.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/algorithms/form/form.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel bg-light\">\r\n    <div class=\"panel-header text-center\" *ngIf=\"!editing\">\r\n        <div class=\"panel-title h3\">{{ algorithmData.abbreviation }}</div>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">1. 完整 App 標題</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"!editing\">{{ algorithmData.title }}</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                    <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.title\" placeholder=\"(完整 App/Project 標題)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">2. App 縮寫</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"!editing\">{{ algorithmData.abbreviation }}</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                    <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.abbreviation\" placeholder=\"(App/Project 縮寫)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">3. 作者\r\n                    <button class=\"btn btn-link btn-action\" (click)=\"newAuthor()\" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"tile-subtitle\">\r\n                    <ng-container *ngFor=\"let author of deleteFilter(algorithmData.authors)\">\r\n                        <span class=\"chip\" *ngIf=\"author.name.length\">\r\n                            <ng-container *ngIf=\"!editing\">{{ author.name }}</ng-container>\r\n                            <input class=\"chip-input\" type=\"text\" [(ngModel)]=\"author.name\" placeholder=\"ex. Chih-Chuan Lu\" *ngIf=\"editing\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"deleteAuthor(author)\"></a>\r\n                        </span>\r\n                    </ng-container>\r\n                    <span class=\"chip\" *ngIf=\"newAuthorInput && editing\">\r\n                        <form (submit)=\"newAuthorSubmit()\">\r\n                            <input class=\"chip-input\" autofocus type=\"text\" [(ngModel)]=\"newAuthorName\"\r\n                            [ngModelOptions]=\"{standalone: true}\" #authorInput placeholder=\"(First Name Last Name)\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"newAuthorDiscard()\"></a>\r\n                        </form>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">4. 單位\r\n                    <button class=\"btn btn-link btn-action\" (click)=\"newUnit()\" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"tile-subtitle\">\r\n                    <ng-container *ngFor=\"let unit of algorithmData.units\">\r\n                        <span class=\"chip\" *ngIf=\"unit.length\">\r\n                            <ng-container *ngIf=\"!editing\">{{ unit }}</ng-container>\r\n                            <input class=\"chip-input\" type=\"text\" [(ngModel)]=\"unit\" placeholder=\"(台灣大學資工系)\" *ngIf=\"editing\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"deleteUnit(unit)\"></a>\r\n                        </span>\r\n                    </ng-container>\r\n                    <span class=\"chip\" *ngIf=\"newUnitInput && editing\">\r\n                        <form (submit)=\"newUnitSubmit()\">\r\n                            <input class=\"chip-input\" autofocus type=\"text\" [(ngModel)]=\"newUnitName\"\r\n                            [ngModelOptions]=\"{standalone: true}\" #unitInput placeholder=\"(台灣大學資工系)\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"newUnitDiscard()\"></a>\r\n                        </form>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">5. 計畫隸屬於</div>\r\n                <div class=\"tile-subtitle\">\r\n                    <span *ngIf=\"!editing\">{{ algorithmData.belong_to }}</span>\r\n                    <select class=\"form-select\" [(ngModel)]=\"algorithmData.belong_to\" *ngIf=\"editing\">\r\n                        <option>a. 科技部人工智慧技術暨全幅健康照護聯合研究中心-台大人工智慧中心</option>\r\n                        <option>b. 科技部人工智慧製造系統研究中心-清大人工智慧中心</option>\r\n                        <option>c. 科技部人工智慧普適研究中心-交大人工智慧中心</option>\r\n                        <option>d. 科技部人工智慧生技醫療-成大人工智慧中心</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">6. 問題回報聯絡 Email</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"!editing\">{{ algorithmData.email }}</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                    <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.email\" placeholder=\"(aintu@ntu.edu.tw)\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">7. 功能描述</div>\r\n                <div markdown class=\"tile-subtitle\" *ngIf=\"!editing\" [data]=\"algorithmData.description\"></div>\r\n                <div class=\"tile-subtitle\">\r\n                    <textarea class=\"form-input\" *ngIf=\"editing\" [(ngModel)]=\"algorithmData.description\" placeholder=\"(......)\" rows=\"4\"></textarea>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">8. Keyword\r\n                    <button class=\"btn btn-link btn-action\" (click)=\"newTag()\" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"tile-subtitle\">\r\n                    <span class=\"chip\" *ngFor=\"let tag of deleteFilter(algorithmData.tags)\">\r\n                        {{ tag.tag }}\r\n                        <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                        (click)=\"deleteTag(tag)\"></a>\r\n                    </span>\r\n                    <span class=\"chip\" *ngIf=\"newTagInput && editing\">\r\n                        <form (submit)=\"newTagSubmit()\">\r\n                            <input class=\"chip-input\" autofocus type=\"text\" [(ngModel)]=\"newTagName\"\r\n                            [ngModelOptions]=\"{standalone: true}\" #tagInput placeholder=\"(Image Processing ...)\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"newTagDiscard()\"></a>\r\n                        </form>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">9. 程式會使用到的 NN(Neural Network) Toolkit & NN類別\r\n                    <button class=\"btn btn-link btn-action\" (click)=\"newCategory()\" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"tile-subtitle\">\r\n                    <ng-container *ngFor=\"let category of algorithmData.categories\">\r\n                        <span class=\"chip\" *ngIf=\"category.length\">\r\n                            <ng-container *ngIf=\"!editing\">{{ category }}</ng-container>\r\n                            <input class=\"chip-input\" type=\"text\" [(ngModel)]=\"category\" placeholder=\"(BERT)\" *ngIf=\"editing\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"deleteCategory(category)\"></a>\r\n                        </span>\r\n                    </ng-container>\r\n                    <span class=\"chip\" *ngIf=\"newCategoryInput && editing\">\r\n                        <form (submit)=\"newCategorySubmit()\">\r\n                            <input class=\"chip-input\" autofocus type=\"text\" [(ngModel)]=\"newCategoryName\"\r\n                            [ngModelOptions]=\"{standalone: true}\" #categoryInput placeholder=\"(BERT)\">\r\n                            <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\"\r\n                            (click)=\"newCategoryDiscard()\"></a>\r\n                        </form>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">10. 參考連結 URL/GitHub\r\n                    <button class=\"btn btn-link btn-action \" (click)=\"algorithmData.links.push({id: -1, link: ''}) \" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <ng-container *ngFor=\"let link of deleteFilter(algorithmData.links)\">\r\n                    <div class=\"tile-subtitle\" *ngIf=\"!editing\">{{ link.link }}</div>\r\n                    <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                        <input type=\"text\" class=\"form-input\" [(ngModel)]=\"link.link\" style=\"display: inline;\">\r\n                        <a aria-label=\"close\" role=\"button\" class=\"btn btn-clear\" *ngIf=\"editing\" (click)=\"link.delete = true\" style=\"display: inline;\"></a>\r\n                    </div>\r\n                </ng-container>\r\n                <div class=\"tile-subtitle \" *ngIf=\"editing \">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered \">\r\n            <div class=\"tile-content \">\r\n                <div class=\"tile-title text-bold \">11. 程式會使用到的資料集（可參考範例）\r\n                    <button class=\"btn btn-link btn-action\" (click)=\"algorithmData.datasets.push({id: -1, name: '', link: '', description: '', free: 1, open: 1})\" *ngIf=\"editing\">\r\n                        <i class=\"icon icon-plus\"></i>\r\n                    </button>\r\n                </div>\r\n                <div class=\"tile-content \">\r\n                    <div class=\"card my-2\" *ngFor=\"let dataset of deleteFilter(algorithmData.datasets)\">\r\n                        <div class=\"card-body\" *ngIf=\"!editing\">\r\n                            <p>名稱：{{ dataset.name }}</p>\r\n                            <p>連結：{{ dataset.link }}</p>\r\n                            <span>描述：</span>\r\n                            <markdown [data]=\"dataset.description\"></markdown>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">是否免費使用：{{ dataset.free ? '是' : '否' }}</label>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">是否開放授權：{{ dataset.open ? '是' : '否' }}</label>\r\n                              <markdown [data]=\"dataset.resource\" *ngIf=\"dataset.open == 1\"></markdown>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\" *ngIf=\"editing\">\r\n                            <p>名稱：<input type=\"text\" class=\"form-input \" [(ngModel)]=\"dataset.name\"></p>\r\n                            <p>連結：<input type=\"text\" class=\"form-input \" [(ngModel)]=\"dataset.link\"></p>\r\n                            <span>描述：</span>\r\n                            <textarea class=\"form-input \" placeholder=\"可使用 Markdown \" [(ngModel)]=\"dataset.description\" rows=\"4\"></textarea>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">是否免費使用</label>\r\n                              <label class=\"form-radio form-inline\">\r\n                                <input type=\"radio\" name=\"free\"\r\n                                [checked]=\"dataset.free === 1\"\r\n                                (change)=\"dataset.free = 1\"><i class=\"form-icon\"></i> 是\r\n                              </label>\r\n                              <label class=\"form-radio form-inline\">\r\n                                <input type=\"radio\" name=\"free\"\r\n                                [checked]=\"dataset.free === 0\"\r\n                                (change)=\"dataset.free = 0\"><i class=\"form-icon\"></i> 否\r\n                              </label>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                              <label class=\"form-label\">是否開放授權</label>\r\n                              <label class=\"form-radio form-inline\">\r\n                                <input type=\"radio\" name=\"open\" \r\n                                    [checked]=\"dataset.open === 1\"\r\n                                    (change)=\"dataset.open = 1\"><i class=\"form-icon\"></i> 是\r\n                              </label>\r\n                              <label class=\"form-radio form-inline\">\r\n                                <input type=\"radio\" name=\"open\" \r\n                                [checked]=\"dataset.open === 0\"\r\n                                (change)=\"dataset.open = 0\"><i class=\"form-icon\"></i> 否（有版權問題）\r\n                              </label>\r\n                              <label class=\"form-label\" *ngIf=\"dataset.open == 1\">可被下載的資料集 URL or GitHub Link: </label>\r\n                              <textarea class=\"form-input\" id=\"resource\" rows=\"3\" [(ngModel)]=\"dataset.resource\" *ngIf=\"dataset.open == 1\"></textarea>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-footer\" *ngIf=\"editing\">\r\n                            <button class=\"btn btn-error\" (click)=\"dataset.delete = true\">刪除</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered \">\r\n            <div class=\"tile-content \">\r\n                <div class=\"tile-title text-bold \">12. 可供程式 (App) 選擇的參數</div>\r\n                <div class=\"tile-content \">\r\n                    <table class=\"table table-striped table-hover \">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>變數名稱</th>\r\n                                <th style=\"width: 60%; \">說明</th>\r\n                                <th *ngIf=\"editing \">操作</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let parameter of deleteFilter(algorithmData.parameters)\">\r\n                                <td *ngIf=\"!editing\">{{ parameter.variable }}</td>\r\n                                <td *ngIf=\"editing\"><input type=\"text\" class=\"form-input\" [(ngModel)]=\"parameter.variable\"></td>\r\n                                <td *ngIf=\"!editing\">\r\n                                    <markdown [data]=\"parameter.description\"></markdown>\r\n                                </td>\r\n                                <td *ngIf=\"editing\"><textarea class=\"form-input \" placeholder=\"可使用 Markdown \" [(ngModel)]=\"parameter.description\"></textarea></td>\r\n                                <td *ngIf=\"editing \">\r\n                                    <button class=\"btn btn-sm btn-error \" (click)=\"parameter.delete =  true\"><i class=\"icon icon-delete \"></i></button>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"editing \">\r\n                                <td><input type=\"text \" class=\"form-input \" placeholder=\"--demo\" [(ngModel)]=\"newParameter.variable\"></td>\r\n                                <td><textarea class=\"form-input \" placeholder=\"可使用 Markdown \" [(ngModel)]=\"newParameter.description\"></textarea></td>\r\n                                <td><button class=\"btn btn-sm btn-success \" (click)=\"newParameterSubmit()\"><i class=\"icon icon-check \"></i></button></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">13. 程式 (App) 輸入格式（image, text, speech or ...)</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"!editing\"><code>{{ algorithmData.input_type }}</code></div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                    <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.input_type\" placeholder=\"ex. audio/*\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">14. 程式 (App) 輸出格式（image, text, speech or ...)</div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"!editing\"><code>{{ algorithmData.output_type }}</code></div>\r\n                <div class=\"tile-subtitle\" *ngIf=\"editing\">\r\n                    <input type=\"text\" class=\"form-input\" [(ngModel)]=\"algorithmData.output_type\" placeholder=\"ex. text/json\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tile tile-centered\">\r\n            <div class=\"tile-content\">\r\n                <div class=\"tile-title text-bold\">15. 識別碼</div>\r\n                <div class=\"tile-subtitle\">{{ algorithmData.remote_secret }}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dataset2019/dataset2019.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dataset2019/dataset2019.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"container\">\n        <div class=\"columns\">\n          <div class=\"column\">\n            <div class=\"text-center btn-group\">\n              <a class=\"btn btn-success mt-1\" (click)=\"ngOnInit();form = false\">蒐集結果</a>\n              <br><br><br>\n              <a class=\"btn btn-primary mt-1\" (click)=\"flush()\">新增</a>\n            </div>\n            <ol class=\"menu menu-nav\">\n              <li class=\"menu-item\" *ngFor=\"let dataset of datasets;let idx = index\">\n                <a (click)=\"show(dataset)\">{{ idx+1 }}. {{ dataset.name }}</a>\n              </li>\n            </ol>\n          </div>\n          <div class=\"divider-vert \"></div>\n          <div class=\"column col-9 \">\n            <div class=\"flash\" [ngClass]=\"{'flash-error': error, 'flash-success': success}\" *ngIf=\"flash.length\">{{ flash }}</div>\n            <div class=\"panel bg-light\" *ngIf=\"form\">\n              <div class=\"panel-header text-center\">\n                <div class=\"panel-title h3\">AI專案年度國際研討會暨成果展</div>\n                <div class=\"panel-subtitle h5\">AI之泉 - DataSet 收集彙整調查</div>\n              </div>\n              <p class=\"help-text\">*. 收集到的資料集, 將於11/14(四) & 11/15(五)於交大博愛校區展示<br>\n                  *. 展示方式: 簡報(10min ~15min) or 海報 (方式由主辦方決定) <br>\n                  *. 1個資料集 請填 1份 表單 <br>\n                  *. 本網頁無法更新，避免誤刪(刪除功能先取消)， 欲刪除請 mail 管理員<br>\n                  *. 問題回報: mslin@nlg.csie.ntu.edu.tw\n                </p>\n              <div class=\"panel-body\">\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"name\">一、資料集名稱</label>\n                  <input class=\"form-input\" type=\"text\" id=\"name\" [(ngModel)]=\"name\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"unit\">二、收集單位（多個單位請使用 ; 區隔）</label>\n                  <input class=\"form-input\" type=\"text\" id=\"unit\" [(ngModel)]=\"unit\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"holder\">三、計畫主持人（Co-PI請用括弧區隔）</label>\n                  <input class=\"form-input\" type=\"text\" id=\"holder\" [(ngModel)]=\"holder\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"author\">四、作者（多個作者請使用 ; 區隔）</label>\n                  <input class=\"form-input\" type=\"text\" id=\"author\" [(ngModel)]=\"author\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"email\">五、主要聯絡人 Email</label>\n                  <input class=\"form-input\" type=\"text\" id=\"email\" [(ngModel)]=\"email\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"project-belong\">六、計畫隸屬於</label>\n                  <select class=\"form-select\" [(ngModel)]=\"projectBelong\" id=\"project-belong\">\n                    <option>a. 科技部人工智慧技術暨全幅健康照護聯合研究中心-台大人工智慧中心</option>\n                    <option>b. 科技部人工智慧製造系統研究中心-清大人工智慧中心</option>\n                    <option>c. 科技部人工智慧普適研究中心-交大人工智慧中心</option>\n                    <option>d. 科技部人工智慧生技醫療-成大人工智慧中心</option>\n                  </select>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">七、資料集類別</label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['NLP']\"><i class=\"form-icon\"></i> NLP </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['Speech Recognition']\"><i class=\"form-icon\"></i>\n                    Speech\n                    Recognition </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['Image Processing']\"><i class=\"form-icon\"></i> Image\n                    Processing\n                  </label><br>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['機器學習']\"><i class=\"form-icon\"></i> 機器學習\n                  </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['多媒體檢索']\"><i class=\"form-icon\"></i> 多媒體檢索\n                  </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['決策分析']\"><i class=\"form-icon\"></i> 決策分析\n                  </label><br>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['群眾行為分析']\"><i class=\"form-icon\"></i> 群眾行為分析\n                  </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['多組學分析']\"><i class=\"form-icon\"></i> 多組學分析\n                  </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['智慧用藥']\"><i class=\"form-icon\"></i> 智慧用藥\n                  </label><br>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['精神照護']\"><i class=\"form-icon\"></i> 精神照護\n                  </label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['醫療影像']\"><i class=\"form-icon\"></i> 醫療影像\n                  </label><br>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" [(ngModel)]=\"categories['_other']\"><i class=\"form-icon\"></i> 其他\n                  </label>\n                  <input class=\"form-input input-sm d-inline-block\" style=\"width: 150px\" type=\"text\"\n                    [(ngModel)]=\"otherCategories\">\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">八、是否免費使用</label>\n                  <label class=\"form-radio form-inline\">\n                    <input type=\"radio\" name=\"free\" [(ngModel)]=\"free\" value=\"1\"><i class=\"form-icon\"></i> 是\n                  </label>\n                  <label class=\"form-radio form-inline\">\n                    <input type=\"radio\" name=\"free\" [(ngModel)]=\"free\" value=\"0\"><i class=\"form-icon\"></i> 否\n                  </label>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">九、是否開放授權</label>\n                  <label class=\"form-radio form-inline\">\n                    <input type=\"radio\" name=\"open\" [(ngModel)]=\"open\" value=\"1\"><i class=\"form-icon\"></i> 是\n                  </label>\n                  <label class=\"form-radio form-inline\">\n                    <input type=\"radio\" name=\"open\" [(ngModel)]=\"open\" value=\"0\"><i class=\"form-icon\"></i> 否（有版權問題）\n                  </label>\n                  <label class=\"form-label\" *ngIf=\"open == 1\">可被下載的資料集 URL or GitHub Link: </label>\n                  <textarea class=\"form-input\" id=\"resource\" rows=\"3\" [(ngModel)]=\"resource\" *ngIf=\"open == 1\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"feature\">十、資料集特性說明</label>\n                  <textarea class=\"form-input\" id=\"feature\" rows=\"3\" [(ngModel)]=\"feature\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"methodology\">十一、資料集規模 (Size)/ 收集方式介紹</label>\n                  <textarea class=\"form-input\" id=\"methodology\" rows=\"3\" [(ngModel)]=\"methodology\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\" for=\"published\">十二、DataSet 成果有發表於 Conference/Journal （請列出）</label>\n                  <textarea class=\"form-input\" id=\"published\" rows=\"3\" [(ngModel)]=\"published\"></textarea>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"form-label\">十三、針對此資料集，PI,Co-PI或助理有意願於 2019AI 專案年度國暨研討會暨成果展做 10~15 分鐘的簡報？</label>\n                  <label class=\"form-checkbox form-inline\">\n                    <input type=\"checkbox\" name=\"give-speach\" [(ngModel)]=\"giveSpeach\"><i class=\"form-icon\"></i> 願意\n                  </label>\n                </div>\n                <button class=\"btn btn-primary mb-2\" type=\"button\" style=\"width: 100%\" (click)=\"submit()\" *ngIf=\"showing.length === 0\">送出</button>\n                <button class=\"btn btn-error mb-2\" type=\"button\" style=\"width: 100%\" (click)=\"delete()\" *ngIf=\"showing.length !== 0\">刪除</button>\n              </div>\n            </div>\n            <div class=\"panel bg-light\" *ngIf=\"!form\">\n              <div class=\"panel-header text-center\">\n                <div class=\"panel-title h3\">蒐集結果</div>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"panel-title h3\">台大人工智慧中心</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('a. 科技部人工智慧技術暨全幅健康照護聯合研究中心-台大人工智慧中心')\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <div class=\"panel-title h5 pt-2\">有意願演講者</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('a. 科技部人工智慧技術暨全幅健康照護聯合研究中心-台大人工智慧中心', true)\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>           \n                <hr>\n                <div class=\"panel-title h3\">清大人工智慧中心</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('b. 科技部人工智慧製造系統研究中心-清大人工智慧中心')\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <div class=\"panel-title h5 pt-2\">有意願演講者</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('b. 科技部人工智慧製造系統研究中心-清大人工智慧中心', true)\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <hr>\n                <div class=\"panel-title h3\">交大人工智慧中心</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('c. 科技部人工智慧普適研究中心-交大人工智慧中心')\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <div class=\"panel-title h5 pt-2\">有意願演講者</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('c. 科技部人工智慧普適研究中心-交大人工智慧中心', true)\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <hr>\n                <div class=\"panel-title h3\">成大人工智慧中心</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('d. 科技部人工智慧生技醫療-成大人工智慧中心')\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n                <div class=\"panel-title h5 pt-2\">有意願演講者</div>\n                <div class=\"py-2\" *ngFor=\"let dataset of datasetByUnit('d. 科技部人工智慧生技醫療-成大人工智慧中心', true)\">\n                  名稱：{{ dataset['name'] }}<br>\n                  計畫主持人：{{ dataset['holder'] }}<br>\n                  聯絡 Email：{{ dataset['email'] }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns bg-dark\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto text-center text-light\">\n      <p>&copy; Taitk 2019</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns bg-dark\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <header class=\"navbar\">\n        <section class=\"navbar-section\">\n          <a routerLink=\"algorithms/\" fragment=\"all\" class=\"navbar-brand mr-2\"><img src=\"assets/logo.png\" alt=\"TAITK Server\"></a>\n        </section>\n        <section class=\"navbar-section\" *ngIf=\"!userService.logined\">\n          <a routerLink=\"login\" class=\"btn btn-link text-light\">登入</a>\n          <a routerLink=\"algorithms\" *ngIf=\"!userService.logined\"></a>\n        </section>\n        <section class=\"navbar-section\" *ngIf=\"userService.logined\">\n          <a routerLink=\"algorithms\" class=\"btn btn-link text-light\">{{ userService.email }}</a>\n          <a (click)=\"logout()\" class=\"btn btn-link text-light\">登出</a>\n        </section>\n      </header>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-mx-auto col-4 col-xl-4 col-lg-4 col-md-6 col-sm-8 col-xs-8\">\n      <div class=\"toast toast-error\" *ngIf=\"errorToast\">\n        <button class=\"btn btn-clear float-right\" (click)=\"errorToast = ''\"></button>\n        {{ errorToast }}\n      </div>\n      <div class=\"card\" *ngIf=\"formType === 'login'\">\n        <div class=\"card-header\">\n          <div class=\"card-title h5\">登入</div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"group\" class=\"form-label\">團隊名稱</label>\n            <input type=\"text\" class=\"form-input\" id=\"group\" [(ngModel)]=\"group\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"form-label\">電子信箱</label>\n            <input type=\"text\" class=\"form-input\" id=\"email\" [(ngModel)]=\"email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"remeber\" class=\"form-checkbox\">\n              <input type=\"checkbox\" id=\"remeber\" [(ngModel)]=\"remeber\"><i class=\"form-icon\"></i>\n              記住我\n            </label>\n          </div>\n        </div>\n        <div class=\"card-footer text-center\">\n          <button class=\"btn btn-primary\" (click)=\"login()\">登入</button>\n          <div class=\"divider\" data-content=\"OR\"></div>\n          <button class=\"btn\" (click)=\"useForm('reg')\">註冊</button>\n        </div>\n      </div>\n\n\n      <div class=\"card\" *ngIf=\"formType === 'reg'\">\n        <div class=\"card-header\">\n          <div class=\"card-title h5\">註冊</div>\n          <div class=\"card-subtitle\"><span class=\"text-error\">*</span> 必填</div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"group\" class=\"form-label\">團隊名稱<span class=\"text-error\">*</span></label>\n            <input type=\"text\" class=\"form-input\" id=\"group\" [(ngModel)]=\"group\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"form-label\">電子信箱<span class=\"text-error\">*</span></label>\n            <input type=\"text\" class=\"form-input\" id=\"email\" [(ngModel)]=\"email\">\n          </div>\n        </div>\n        <div class=\"card-footer text-center\">\n          <button class=\"btn btn-primary\" (click)=\"register()\">註冊</button>\n          <div class=\"divider\" data-content=\"OR\"></div>\n          <button class=\"btn\" (click)=\"useForm('login')\">登入</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/info/info.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/info/info.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <div class=\"column text-right\">\n    <span style=\"font-size: 2em; margin-bottom: -2px;\">{{ post.date.getMonth()+1 }}/{{ post.date.getDate() }}</span>\n    <br>{{ post.date.getFullYear() }}\n  </div>\n  <div class=\"divider-vert\"></div>\n  <div class=\"column col-9\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"card-title h3\"><a [routerLink]=\"'/news/' + this.post['id']\" class=\"text-dark\">{{ post.title }}</a></div>\n      </div>\n      <div class=\"card-image\">\n        <img [src]=\"post.image\" alt=\"example\" class=\"img-fit-cover\">\n      </div>\n      <div class=\"card-body\">\n        <p>\n          {{ post.content }}\n        </p>\n      </div>\n      <div class=\"overflow-cover\">&nbsp;</div>\n      <div class=\"card-footer text-right\"><a [routerLink]=\"'/news/' + this.post['id']\" class=\"btn btn-link\">繼續閱讀</a></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/news.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"container news-items\" *ngFor=\"let post of posts;\">\n        <app-news-info [post]=\"post\"></app-news-info>\n      </div>\n    </div>\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"divider text-center\" data-content=\"已到底部\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/news/post/post.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/news/post/post.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"columns\">\n    <div class=\"column col-8 col-xl-8 col-lg-8 col-md-10 col-sm-10 col-xs-10 col-mx-auto\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-title h3\">範例文章標題</div>\n          <div class=\"card-subtitle\">2019/03/10 19:36:41 by <a href=\"#\">某人</a></div>\n        </div>\n        <div class=\"card-image\">\n          <img src=\"//i.imgur.com/mM3xVtJ.jpg\" alt=\"example\" class=\"img-responsive\">\n        </div>\n        <div class=\"card-body\">\n          <p>\n            人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/profile/profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/form/form.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/form/form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/info/info.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/info/info.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  info works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/item/item.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/item/item.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  item works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tasks works!\n</p>\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/algorithm.model.ts":
/*!************************************!*\
  !*** ./src/app/algorithm.model.ts ***!
  \************************************/
/*! exports provided: Algorithm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Algorithm", function() { return Algorithm; });
var Algorithm = /** @class */ (function () {
    function Algorithm(obj) {
        Object.assign(this, obj);
    }
    return Algorithm;
}());



/***/ }),

/***/ "./src/app/algorithm.service.ts":
/*!**************************************!*\
  !*** ./src/app/algorithm.service.ts ***!
  \**************************************/
/*! exports provided: AlgorithmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmService", function() { return AlgorithmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _algorithm_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithm.model */ "./src/app/algorithm.model.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AlgorithmService = /** @class */ (function () {
    function AlgorithmService(httpClient, userService) {
        this.httpClient = httpClient;
        this.userService = userService;
    }
    AlgorithmService.prototype.list = function (page, full) {
        if (page === void 0) { page = 1; }
        if (full === void 0) { full = false; }
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms?";
        if (this.userService.token) {
            api += "token=" + this.userService.token + "&";
        }
        if (full) {
            api += "full=true&";
        }
        if (page) {
            api += "page=" + page;
        }
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.get(api);
            request.subscribe(function (data) {
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AlgorithmService.prototype.get = function (id) {
        var self = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.userService.token,
        });
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id;
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.get(api, { headers: headers });
            request.subscribe(function (data) {
                data['data']['units'] = data['data']['unit'].split('、');
                data['data']['categories'] = data['data']['category'].split(', ');
                resolve(new _algorithm_model__WEBPACK_IMPORTED_MODULE_4__["Algorithm"](data['data']));
            }, function (err) {
                reject(err);
            });
        });
    };
    AlgorithmService.prototype.create = function (input) {
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms";
        input['token'] = this.userService.token;
        input['unit'] = input['units'].join('、');
        input['category'] = input['categories'].join(', ');
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.post(api, input);
            request.subscribe(function (data) {
                if (data['success']) {
                    data = data['data'];
                    self.handleAuthors(data['id'], input['authors'], null);
                    self.handleTags(data['id'], input['tags'], null);
                    self.handleLinks(data['id'], input['links'], null);
                    self.handleDatasets(data['id'], input['datasets'], null);
                    self.handleParameters(data['id'], input['parameters'], null);
                    resolve(data['id']);
                }
                else {
                    reject(data['reason']);
                }
            }, function (err) {
                console.error(err);
                reject(err);
            });
        });
    };
    AlgorithmService.prototype.update = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var self, api, oldData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('eqw');
                        self = this;
                        api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + data.id;
                        return [4 /*yield*/, this.get(data.id)];
                    case 1:
                        oldData = (_a.sent());
                        data['token'] = this.userService.token;
                        data['unit'] = data['units'].join('、');
                        data['category'] = data['categories'].join(', ');
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var request = self.httpClient.patch(api, data);
                                self.handleAuthors(data['id'], data['authors'], oldData['authors']);
                                self.handleTags(data['id'], data['tags'], oldData['tags']);
                                self.handleLinks(data['id'], data['links'], oldData['links']);
                                self.handleDatasets(data['id'], data['datasets'], oldData['datasets']);
                                self.handleParameters(data['id'], data['parameters'], oldData['parameters']);
                                request.subscribe(function (data) {
                                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            if (data['success']) {
                                                resolve(data['data']['id']);
                                            }
                                            else {
                                                reject(data['reason']);
                                            }
                                            return [2 /*return*/];
                                        });
                                    });
                                }, function (err) {
                                    console.error(err);
                                    reject(err);
                                });
                            })];
                }
            });
        });
    };
    AlgorithmService.prototype.handleTags = function (id, data, oldData) {
        var _this = this;
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/tags";
        data.forEach(function (tag, index) {
            tag['token'] = _this.userService.token;
            if (tag.id === -1) {
                self.httpClient.post(api, tag).subscribe();
            }
            else if (tag.delete || !tag.tag.length) {
                self.deleteAttribute('tags', id, tag.id);
            }
            else if (tag.tag !== oldData[index].tag) {
                self.updateAttribute('tags', id, tag.id, tag);
            }
        });
    };
    AlgorithmService.prototype.handleAuthors = function (id, data, oldData) {
        var self = this;
        data.forEach(function (author, index) {
            if (author.id === -1) {
                self.createAttribute('authors', id, author);
            }
            else {
                if (author.name.length) {
                    if (author.name !== oldData[index].name)
                        self.updateAttribute('authors', id, author.id, author);
                }
                else {
                    self.deleteAttribute('authors', id, author.id);
                }
            }
        });
    };
    AlgorithmService.prototype.handleLinks = function (id, data, oldData) {
        var _this = this;
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/links";
        data.forEach(function (link, index) {
            link['token'] = _this.userService.token;
            link['description'] = 'none';
            if (link.id === -1) {
                self.httpClient.post(api, link).subscribe();
            }
            else {
                if (link['delete']) {
                    self.deleteAttribute('links', id, link.id);
                }
                else if (link.link !== oldData[index].link || link.description !== oldData[index].description) {
                    self.updateAttribute('links', id, link.id, link);
                }
            }
        });
    };
    AlgorithmService.prototype.handleDatasets = function (id, data, oldData) {
        var _this = this;
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/datasets";
        data.forEach(function (dataset, index) {
            dataset['token'] = _this.userService.token;
            if (dataset.id === -1) {
                self.httpClient.post(api, dataset).subscribe();
            }
            else {
                if (dataset['delete']) {
                    self.deleteAttribute('datasets', id, dataset.id);
                }
                else if (dataset.description !== oldData[index].description || dataset.link !== oldData[index].link
                    || dataset.name !== oldData[index].name || dataset.free !== oldData[index].free
                    || dataset.open !== oldData[index].open || dataset.resource !== oldData[index].resource) {
                    self.updateAttribute('datasets', id, dataset.id, dataset);
                }
            }
        });
    };
    AlgorithmService.prototype.handleParameters = function (id, data, oldData) {
        var _this = this;
        var self = this;
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/parameters";
        data.forEach(function (dataset, index) {
            dataset['token'] = _this.userService.token;
            if (dataset.id === -1) {
                self.httpClient.post(api, dataset).subscribe();
            }
            else {
                if (dataset['delete']) {
                    self.deleteAttribute('parameters', id, dataset.id);
                }
                else if (dataset.label !== oldData[index].label || dataset.description !== oldData[index].description || dataset.variable !== oldData[index].variable) {
                    self.updateAttribute('parameters', id, dataset.id, dataset);
                }
            }
        });
    };
    AlgorithmService.prototype.createAttribute = function (attr, id, data) {
        if (data.delete) {
            return;
        }
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/" + attr;
        data['token'] = this.userService.token;
        this.httpClient.post(api, data).subscribe();
    };
    AlgorithmService.prototype.updateAttribute = function (attr, id, subid, data) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/" + attr + "/" + subid;
        data['token'] = this.userService.token;
        this.httpClient.patch(api, data).subscribe();
    };
    AlgorithmService.prototype.deleteAttribute = function (attr, id, subid) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api + "algorithms/" + id + "/" + attr + "/" + subid;
        this.httpClient.delete(api, { params: { 'token': this.userService.token } }).subscribe();
    };
    AlgorithmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AlgorithmService);
    return AlgorithmService;
}());



/***/ }),

/***/ "./src/app/algorithms/algorithms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-action {\r\n    width: 90%;\r\n    border-radius: 99px;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\napp-algorithm-example {\r\n    position: fixed;\r\n    background: white;\r\n    z-index: 1024;\r\n    top: 0;\r\n    width: 40%;\r\n    height: 100vh;\r\n    overflow: hidden auto;\r\n    transition: left 0.6s;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtcy9hbGdvcml0aG1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLE1BQU07SUFDTixVQUFVO0lBQ1YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hbGdvcml0aG1zL2FsZ29yaXRobXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZGl0LWFjdGlvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTlweDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuYXBwLWFsZ29yaXRobS1leGFtcGxlIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgei1pbmRleDogMTAyNDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjZzO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/algorithms/algorithms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/algorithms/algorithms.component.ts ***!
  \****************************************************/
/*! exports provided: AlgorithmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmsComponent", function() { return AlgorithmsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/algorithms/form/form.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _algorithm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../algorithm.service */ "./src/app/algorithm.service.ts");






var AlgorithmsComponent = /** @class */ (function () {
    function AlgorithmsComponent(userService, algorithmService, router, route) {
        this.userService = userService;
        this.algorithmService = algorithmService;
        this.router = router;
        this.route = route;
        this.full = false;
        this.editing = false;
        this.discardPrompt = false;
        this.example = false;
        this.algorithms = [];
        this.algorithm = {
            id: -1,
            abbreviation: '',
            title: '',
            categories: [],
            authors: [],
            units: [],
            tags: [],
            features: '',
            links: [],
            parameters: [],
            datasets: [],
            input_type: '',
            output_type: '',
            remote_secret: '',
            email: '',
            belong_to: '',
        };
        this.algorithmBackup = {
            id: -1,
            abbreviation: '',
            title: '',
            categories: [],
            authors: [],
            units: [],
            tags: [],
            features: '',
            links: [],
            parameters: [],
            datasets: [],
            input_type: '',
            output_type: '',
            remote_secret: '',
            email: '',
            belong_to: '',
        };
    }
    Object.defineProperty(AlgorithmsComponent.prototype, "logined", {
        get: function () {
            return this.userService.logined;
        },
        enumerable: true,
        configurable: true
    });
    AlgorithmsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.userService.registerInitedCallback(function () {
            self.route.paramMap.subscribe(function (e) {
                var params = e['params'];
                _this.route.fragment.subscribe(function (fragment) {
                    if (!self.userService.logined || fragment === 'all') {
                        self.full = true;
                        self.algorithmService.list(null, true).then(function (data) {
                            self.algorithms = data.slice();
                            if (+params['algorithm']) {
                                self.loadAlgorithm(+params['algorithm']);
                            }
                            else {
                                self.loadAlgorithm(+data[0].id);
                            }
                        });
                    }
                    else {
                        self.algorithmService.list().then(function (data) {
                            self.algorithms = data.slice();
                            if (params['algorithm'] === 'new') {
                                self.startEdit(true);
                            }
                            else if (+params['algorithm']) {
                                self.loadAlgorithm(+params['algorithm']);
                            }
                            else if (data[0]) {
                                self.loadAlgorithm(+data[0].id);
                            }
                            else {
                                self.router.navigate(['/algorithms/new']);
                            }
                        });
                    }
                });
            });
        });
    };
    AlgorithmsComponent.prototype.loadAlgorithm = function (id) {
        var _this = this;
        this.algorithmService.get(id).then(function (data) {
            _this.algorithm = data;
        }).catch(function (_) {
            _this.router.navigate(['/algorithms/', _this.algorithms[0].id]);
        });
    };
    AlgorithmsComponent.prototype.startEdit = function (create) {
        if (create === void 0) { create = false; }
        if (create) {
            this.algorithm = {
                id: -1,
                abbreviation: '',
                title: '',
                categories: [],
                authors: [],
                units: [],
                tags: [],
                features: '',
                links: [],
                parameters: [],
                datasets: [],
                input_type: '',
                output_type: '',
                remote_secret: '',
                email: '',
                belong_to: '',
            };
        }
        else {
            Object.assign(this.algorithmBackup, this.algorithm);
        }
        this.editing = true;
    };
    AlgorithmsComponent.prototype.finishEdit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var id, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.form.switchEditMode())
                            return [2 /*return*/];
                        if (!(this.algorithm.id === -1)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.algorithmService.create(this.algorithm)];
                    case 2:
                        id = _a.sent();
                        this.algorithms.push({ id: +id, abbreviation: this.algorithm.abbreviation });
                        this.algorithm.id = +id;
                        this.router.navigate(['/algorithms/', id]);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        alert('err');
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.algorithmService.update(this.algorithm).then(function (_) {
                            console.log('done');
                        });
                        _a.label = 6;
                    case 6:
                        this.editing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AlgorithmsComponent.prototype.discardEdit = function () {
        this.discardPrompt = true;
    };
    AlgorithmsComponent.prototype.discardEditCancel = function () {
        this.discardPrompt = false;
    };
    AlgorithmsComponent.prototype.discardEditConfirm = function () {
        this.discardPrompt = false;
        this.editing = false;
        Object.assign(this.algorithm, this.algorithmBackup);
        this.router.navigate(['/algorithms/']);
        this.form.switchEditMode();
    };
    AlgorithmsComponent.prototype.switchEditMode = function () {
        if (!this.form.switchEditMode())
            return;
    };
    AlgorithmsComponent.prototype.toggleExample = function () {
        console.log(this.algorithm);
        this.example = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _form_form_component__WEBPACK_IMPORTED_MODULE_2__["AlgorithmFormComponent"])
    ], AlgorithmsComponent.prototype, "form", void 0);
    AlgorithmsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithms',
            template: __webpack_require__(/*! raw-loader!./algorithms.component.html */ "./node_modules/raw-loader/index.js!./src/app/algorithms/algorithms.component.html"),
            styles: [__webpack_require__(/*! ./algorithms.component.css */ "./src/app/algorithms/algorithms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _algorithm_service__WEBPACK_IMPORTED_MODULE_5__["AlgorithmService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AlgorithmsComponent);
    return AlgorithmsComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/example/example.component.css":
/*!**********************************************************!*\
  !*** ./src/app/algorithms/example/example.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\r\n    min-height: 100%;\r\n}\r\n\r\n.tile-content {\r\n    overflow: auto !important;\r\n}\r\n\r\n.btn-clear {\r\n    position: absolute;\r\n    right: 4px;\r\n    top: 4px;\r\n}\r\n\r\n.tile.tile-centered .tile-subtitle {\r\n    text-overflow: unset;\r\n    white-space: unset;\r\n    word-break: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtcy9leGFtcGxlL2V4YW1wbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9hbGdvcml0aG1zL2V4YW1wbGUvZXhhbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50aWxlLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1jbGVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNHB4O1xyXG4gICAgdG9wOiA0cHg7XHJcbn1cclxuLnRpbGUudGlsZS1jZW50ZXJlZCAudGlsZS1zdWJ0aXRsZSB7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiB1bnNldDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldDtcclxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/algorithms/example/example.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/algorithms/example/example.component.ts ***!
  \*********************************************************/
/*! exports provided: AlgorithmExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmExampleComponent", function() { return AlgorithmExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlgorithmExampleComponent = /** @class */ (function () {
    function AlgorithmExampleComponent() {
        this.exampleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AlgorithmExampleComponent.prototype.ngOnInit = function () {
    };
    AlgorithmExampleComponent.prototype.renderUnderLine = function (raw) {
        raw = raw.replace(/&/g, '&amp;');
        raw = raw.replace(/</g, '&lt;');
        raw = raw.replace(/>/g, '&gt;');
        raw = raw.replace(/\\_/g, '&lowbar;');
        raw = raw.replace(/\\\\/g, '&bsol;');
        raw.match(/_\S*_/g).forEach(function (match) {
            var content = match.match(/_(\S*)_/)[1];
            raw = raw.replace(match, '<u>' + content + '</u>');
        });
        return raw;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlgorithmExampleComponent.prototype, "example", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgorithmExampleComponent.prototype, "exampleChange", void 0);
    AlgorithmExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithm-example',
            template: __webpack_require__(/*! raw-loader!./example.component.html */ "./node_modules/raw-loader/index.js!./src/app/algorithms/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/algorithms/example/example.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlgorithmExampleComponent);
    return AlgorithmExampleComponent;
}());



/***/ }),

/***/ "./src/app/algorithms/form/form.component.css":
/*!****************************************************!*\
  !*** ./src/app/algorithms/form/form.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    table-layout: fixed;\r\n}\r\n\r\ntable td {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.panel {\r\n    background: white;\r\n    margin-bottom: 16px;\r\n}\r\n\r\n.tile {\r\n    margin: .75em 0;\r\n}\r\n\r\n.panel-title>input {\r\n    font-size: 1.4rem;\r\n    border: none;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n\r\n.json-textarea {\r\n    height: calc(70vh - 150px);\r\n}\r\n\r\n.chip-input {\r\n    border: none;\r\n    background: none;\r\n}\r\n\r\n.json-error {\r\n    position: relative;\r\n    width: 80%;\r\n    left: 10%;\r\n    top: -100%;\r\n    -webkit-transform: translateY(-33%);\r\n            transform: translateY(-33%);\r\n}\r\n\r\n.form-input {\r\n    margin-top: 3px;\r\n}\r\n\r\n.form-input::-webkit-input-placeholder {\r\n    content: '';\r\n    color: green;\r\n}\r\n\r\n.form-input::-moz-placeholder {\r\n    content: '';\r\n    color: green;\r\n}\r\n\r\n.form-input::-ms-input-placeholder {\r\n    content: '';\r\n    color: green;\r\n}\r\n\r\n.form-input::placeholder {\r\n    content: '';\r\n    color: green;\r\n}\r\n\r\n.tile.tile-centered .tile-subtitle {\r\n    text-overflow: unset;\r\n    white-space: unset;\r\n    word-break: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxnb3JpdGhtcy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0lBQ1YsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFIQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUhBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBSEE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWxnb3JpdGhtcy9mb3JtL2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRhYmxlIHRkIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLnBhbmVsIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnRpbGUge1xyXG4gICAgbWFyZ2luOiAuNzVlbSAwO1xyXG59XHJcblxyXG4ucGFuZWwtdGl0bGU+aW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5qc29uLXRleHRhcmVhIHtcclxuICAgIGhlaWdodDogY2FsYyg3MHZoIC0gMTUwcHgpO1xyXG59XHJcblxyXG4uY2hpcC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uanNvbi1lcnJvciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgdG9wOiAtMTAwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzMlKTtcclxufVxyXG5cclxuLmZvcm0taW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi50aWxlLnRpbGUtY2VudGVyZWQgLnRpbGUtc3VidGl0bGUge1xyXG4gICAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogdW5zZXQ7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/algorithms/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/algorithms/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: AlgorithmFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmFormComponent", function() { return AlgorithmFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_algorithm_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/algorithm.service */ "./src/app/algorithm.service.ts");
/* harmony import */ var _algorithm_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../algorithm.model */ "./src/app/algorithm.model.ts");




var AlgorithmFormComponent = /** @class */ (function () {
    function AlgorithmFormComponent(algorithmService) {
        this.algorithmService = algorithmService;
        this.algorithmDataChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newAuthorInput = false;
        this.newAuthorName = '';
        this.newUnitInput = false;
        this.newUnitName = '';
        this.newCategoryInput = false;
        this.newCategoryName = '';
        this.newTagInput = false;
        this.newTagName = '';
        this.newParameter = {
            label: '',
            variable: '',
            description: '',
            id: -1,
            delete: false
        };
    }
    AlgorithmFormComponent.prototype.ngOnInit = function () {
    };
    AlgorithmFormComponent.prototype.switchEditMode = function () {
        if (this.newAuthorName) {
            this.algorithmData.authors.push({ name: this.newAuthorName, id: -1, delete: false });
            this.newAuthorName = '';
        }
        if (this.newTagName) {
            this.algorithmData.tags.push({ tag: this.newTagName, id: -1, delete: false });
            this.newTagName = '';
        }
        if (this.newParameter.variable && this.newParameter.description) {
            this.newParameterSubmit();
        }
        if (this.newUnitName) {
            this.newUnitSubmit();
        }
        if (this.newCategoryName) {
            this.newCategorySubmit();
        }
        return true;
    };
    AlgorithmFormComponent.prototype.deleteFilter = function (data) {
        if (data && data.length) {
            return data.filter(function (e) { return !e.delete; });
        }
        else {
            return [];
        }
    };
    AlgorithmFormComponent.prototype.deleteAuthor = function (data) {
        data.delete = true;
    };
    AlgorithmFormComponent.prototype.deleteItem = function (data) {
        data.delete = true;
    };
    AlgorithmFormComponent.prototype.deleteUnit = function (data) {
        if (this.algorithmData.units.indexOf(data) !== -1)
            this.algorithmData.units.splice(this.algorithmData.units.indexOf(data), 1);
    };
    AlgorithmFormComponent.prototype.deleteCategory = function (data) {
        if (this.algorithmData.categories.indexOf(data) !== -1)
            this.algorithmData.categories.splice(this.algorithmData.categories.indexOf(data), 1);
    };
    AlgorithmFormComponent.prototype.newAuthor = function () {
        if (this.newAuthorInput && this.newAuthorName) {
            this.newAuthorSubmit();
        }
        this.newAuthorInput = true;
    };
    AlgorithmFormComponent.prototype.newUnit = function () {
        if (this.newUnitInput && this.newUnitName) {
            this.newUnitSubmit();
        }
        this.newUnitInput = true;
    };
    AlgorithmFormComponent.prototype.newCategory = function () {
        if (this.newCategoryInput && this.newCategoryName) {
            this.newCategorySubmit();
        }
        this.newCategoryInput = true;
    };
    AlgorithmFormComponent.prototype.newAuthorSubmit = function () {
        this.newAuthorInput = false;
        if (this.newAuthorName) {
            this.algorithmData.authors.push({ name: this.newAuthorName, id: -1, delete: false });
            this.newAuthorName = '';
            this.authorInput.nativeElement.focus();
        }
        return false;
    };
    AlgorithmFormComponent.prototype.newUnitSubmit = function () {
        this.newUnitInput = false;
        if (this.newUnitName) {
            this.algorithmData.units.push(this.newUnitName);
            this.newUnitName = '';
            this.unitInput.nativeElement.focus();
        }
        return false;
    };
    AlgorithmFormComponent.prototype.newCategorySubmit = function () {
        this.newCategoryInput = false;
        if (this.newCategoryName) {
            this.algorithmData.categories.push(this.newCategoryName);
            this.newUnitName = '';
            this.categoryInput.nativeElement.focus();
            console.log(this.algorithmData.categories);
        }
        return false;
    };
    AlgorithmFormComponent.prototype.newAuthorDiscard = function () {
        this.newAuthorInput = false;
        this.newAuthorName = '';
    };
    AlgorithmFormComponent.prototype.deleteTag = function (data) {
        data.delete = true;
    };
    AlgorithmFormComponent.prototype.newTag = function () {
        if (this.newTagInput && this.newTagName) {
            this.newTagSubmit();
        }
        this.newTagInput = true;
    };
    AlgorithmFormComponent.prototype.newTagSubmit = function () {
        this.newTagInput = false;
        if (this.newTagName) {
            this.algorithmData.tags.push({ tag: this.newTagName, id: -1, delete: false });
            this.newTagName = '';
            this.tagInput.nativeElement.focus();
        }
        return false;
    };
    AlgorithmFormComponent.prototype.newTagDiscard = function () {
        this.newTagInput = false;
        this.newTagName = '';
    };
    AlgorithmFormComponent.prototype.newParameterSubmit = function () {
        this.algorithmData.parameters.push(this.newParameter);
        this.newParameter =
            {
                label: '',
                variable: '',
                description: '',
                id: -1,
                delete: false
            };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AlgorithmFormComponent.prototype, "editing", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _algorithm_model__WEBPACK_IMPORTED_MODULE_3__["Algorithm"])
    ], AlgorithmFormComponent.prototype, "algorithmData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AlgorithmFormComponent.prototype, "algorithmDataChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('authorInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlgorithmFormComponent.prototype, "authorInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tagInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlgorithmFormComponent.prototype, "tagInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unitInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlgorithmFormComponent.prototype, "unitInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AlgorithmFormComponent.prototype, "categoryInput", void 0);
    AlgorithmFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithm-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/algorithms/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/algorithms/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_algorithm_service__WEBPACK_IMPORTED_MODULE_2__["AlgorithmService"]])
    ], AlgorithmFormComponent);
    return AlgorithmFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _news_post_post_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news/post/post.component */ "./src/app/news/post/post.component.ts");
/* harmony import */ var _dataset2019_dataset2019_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dataset2019/dataset2019.component */ "./src/app/dataset2019/dataset2019.component.ts");










var routes = [
    { path: 'dataset2019', component: _dataset2019_dataset2019_component__WEBPACK_IMPORTED_MODULE_9__["Dataset2019Component"] },
    { path: 'algorithms', component: _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmsComponent"] },
    { path: 'algorithms/:algorithm', component: _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmsComponent"] },
    { path: 'news', component: _news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"] },
    { path: 'news/:post', component: _news_post_post_component__WEBPACK_IMPORTED_MODULE_8__["NewsPostComponent"] },
    { path: 'tasks', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: '', redirectTo: 'algorithms/all', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-footer {\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
        this.title = 'frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news.component */ "./src/app/news/news.component.ts");
/* harmony import */ var _news_info_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/info/info.component */ "./src/app/news/info/info.component.ts");
/* harmony import */ var _tasks_form_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/form/form.component */ "./src/app/tasks/form/form.component.ts");
/* harmony import */ var _tasks_info_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/info/info.component */ "./src/app/tasks/info/info.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./algorithms/algorithms.component */ "./src/app/algorithms/algorithms.component.ts");
/* harmony import */ var _news_post_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./news/post/post.component */ "./src/app/news/post/post.component.ts");
/* harmony import */ var _tasks_item_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tasks/item/item.component */ "./src/app/tasks/item/item.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _algorithms_form_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./algorithms/form/form.component */ "./src/app/algorithms/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _algorithms_example_example_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./algorithms/example/example.component */ "./src/app/algorithms/example/example.component.ts");
/* harmony import */ var _dataset2019_dataset2019_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dataset2019/dataset2019.component */ "./src/app/dataset2019/dataset2019.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _news_news_component__WEBPACK_IMPORTED_MODULE_10__["NewsComponent"],
                _news_post_post_component__WEBPACK_IMPORTED_MODULE_16__["NewsPostComponent"],
                _news_info_info_component__WEBPACK_IMPORTED_MODULE_11__["NewsInfoComponent"],
                _tasks_form_form_component__WEBPACK_IMPORTED_MODULE_12__["FormComponent"],
                _tasks_info_info_component__WEBPACK_IMPORTED_MODULE_13__["InfoComponent"],
                _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_14__["TasksComponent"],
                _algorithms_algorithms_component__WEBPACK_IMPORTED_MODULE_15__["AlgorithmsComponent"],
                _algorithms_form_form_component__WEBPACK_IMPORTED_MODULE_19__["AlgorithmFormComponent"],
                _tasks_item_item_component__WEBPACK_IMPORTED_MODULE_17__["ItemComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _algorithms_example_example_component__WEBPACK_IMPORTED_MODULE_21__["AlgorithmExampleComponent"],
                _dataset2019_dataset2019_component__WEBPACK_IMPORTED_MODULE_22__["Dataset2019Component"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_markdown__WEBPACK_IMPORTED_MODULE_3__["MarkdownModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dataset2019/dataset2019.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dataset2019/dataset2019.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.panel {\n    background: white;\n    margin-bottom: 16px;\n}\n.btn-group {\n    width: 100%;\n}\n.btn-group > .btn {\n    width: 100%;\n    border-radius: 99px;\n}\n.help-text {\n    padding-left: 1.2em;\n}\n.flash {\n    width: 100%;\n    margin-bottom: 2em;\n    border-width: 1px;\n    border-radius: 16px;\n    border-style: solid;\n    padding: 8px 12px;\n}\n.flash-success {\n    background: #d4edda;\n    border-color: #c3e6cb;\n    color: #155724;\n}\n.flash-error {\n    color: #721c24;\n    background-color: #f8d7da;\n    border-color: #f5c6cb;\n}\nhr {\n    margin: 4em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YXNldDIwMTkvZGF0YXNldDIwMTkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9kYXRhc2V0MjAxOS9kYXRhc2V0MjAxOS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGFuZWwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uYnRuLWdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA5OXB4O1xufVxuLmhlbHAtdGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjJlbTtcbn1cbi5mbGFzaCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbn1cbi5mbGFzaC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xuICAgIGJvcmRlci1jb2xvcjogI2MzZTZjYjtcbiAgICBjb2xvcjogIzE1NTcyNDtcbn1cbi5mbGFzaC1lcnJvciB7XG4gICAgY29sb3I6ICM3MjFjMjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XG59XG5ociB7XG4gICAgbWFyZ2luOiA0ZW0gMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dataset2019/dataset2019.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dataset2019/dataset2019.component.ts ***!
  \******************************************************/
/*! exports provided: Dataset2019Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dataset2019Component", function() { return Dataset2019Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Dataset2019Component = /** @class */ (function () {
    function Dataset2019Component(httpClient) {
        this.httpClient = httpClient;
        this.datasets = [];
        this.name = '';
        this.unit = '';
        this.holder = '';
        this.author = '';
        this.projectBelong = '';
        this.categories = {
            'NLP': false,
            'Speech Recognition': false,
            'Image Processing': false,
            '機器學習': false,
            '多媒體檢索': false,
            '決策分析': false,
            '群眾行為分析': false,
            '多組學分析': false,
            '智慧用藥': false,
            '精神照護': false,
            '醫療影像': false,
            '_other': false,
        };
        this.otherCategories = '';
        this.free = '0';
        this.open = '0';
        this.feature = '';
        this.methodology = '';
        this.published = '';
        this.resource = '';
        this.giveSpeach = true;
        this.email = '';
        this.success = false;
        this.error = false;
        this.flash = '';
        this.showing = '';
        this.form = true;
    }
    Dataset2019Component.prototype.ngOnInit = function () {
        var _this = this;
        var request = this.httpClient.get('https://taitk.org/api/dataset2019');
        request.subscribe(function (data) {
            _this.datasets = data;
        });
    };
    Dataset2019Component.prototype.result = function () {
    };
    Dataset2019Component.prototype.delete = function () {
        alert('請 mail 管理員\n告知欲刪除之 "資料集名稱" ');
    };
    Dataset2019Component.prototype.show = function (dataset) {
        var _this = this;
        this.form = true;
        var request = this.httpClient.get("https://taitk.org/api/dataset2019/" + dataset.id);
        request.subscribe(function (dataset) {
            _this.flush();
            _this.showing = dataset.id;
            _this.name = dataset.name;
            _this.unit = dataset.unit;
            _this.holder = dataset.holder;
            _this.author = dataset.author;
            _this.email = dataset.email;
            _this.projectBelong = dataset.project_belong;
            var categories = JSON.parse(dataset.categories);
            categories.forEach(function (cate) {
                if (_this.categories.hasOwnProperty(cate)) {
                    _this.categories[cate] = true;
                }
                else {
                    _this.categories['_other'] = true;
                    _this.otherCategories = cate;
                }
            });
            _this.free = '' + dataset.free;
            _this.open = '' + dataset.open;
            _this.feature = dataset.feature;
            _this.methodology = dataset.methodology;
            _this.published = dataset.published;
            _this.resource = dataset.resource;
            _this.giveSpeach = !!dataset.give_speach;
        });
    };
    Dataset2019Component.prototype.flush = function () {
        this.form = true;
        this.showing = '';
        this.name = '';
        this.unit = '';
        this.holder = '';
        this.author = '';
        this.email = '';
        this.projectBelong = '';
        this.categories = {
            'NLP': false,
            'Speech Recognition': false,
            'Image Processing': false,
            '機器學習': false,
            '多媒體檢索': false,
            '決策分析': false,
            '群眾行為分析': false,
            '多組學分析': false,
            '智慧用藥': false,
            '精神照護': false,
            '醫療影像': false,
            '_other': false,
        };
        this.otherCategories = '';
        this.free = '0';
        this.open = '0';
        this.feature = '';
        this.methodology = '';
        this.published = '';
        this.resource = '';
        this.giveSpeach = true;
    };
    Dataset2019Component.prototype.submit = function () {
        var _this = this;
        var categories = Object.keys(this.categories).filter(function (c) { return _this.categories[c]; });
        if (categories.indexOf('_other') > -1) {
            categories.splice(categories.indexOf('_other'), 1, this.otherCategories);
        }
        var request = this.httpClient.post('https://taitk.org/api/dataset2019', {
            name: this.name,
            unit: this.unit,
            holder: this.holder,
            author: this.author,
            email: this.email,
            project_belong: this.projectBelong,
            categories: JSON.stringify(categories),
            free: this.free,
            open: this.open,
            feature: this.feature,
            methodology: this.methodology,
            published: this.published,
            resource: this.resource,
            give_speach: this.giveSpeach ? '1' : '0',
        });
        request.subscribe(function (data) {
            _this.success = true;
            _this.flash = '送出成功。';
            _this.name = '';
            _this.unit = '';
            _this.holder = '';
            _this.author = '';
            _this.email = '';
            _this.projectBelong = '';
            _this.categories = {
                'NLP': false,
                'Speech Recognition': false,
                'Image Processing': false,
                '機器學習': false,
                '多媒體檢索': false,
                '決策分析': false,
                '群眾行為分析': false,
                '多組學分析': false,
                '智慧用藥': false,
                '精神照護': false,
                '醫療影像': false,
                '_other': false,
            };
            _this.otherCategories = '';
            _this.free = '0';
            _this.open = '0';
            _this.feature = '';
            _this.methodology = '';
            _this.published = '';
            _this.resource = '';
            _this.giveSpeach = true;
            _this.showing = '';
            window.scroll(0, 0);
            _this.ngOnInit();
        }, function (err) {
            _this.error = true;
            _this.flash = '送出失敗，請重試或通報。';
            window.scroll(0, 0);
            _this.ngOnInit();
        });
    };
    Dataset2019Component.prototype.datasetByUnit = function (unit, speach) {
        if (speach === void 0) { speach = false; }
        return this.datasets.filter(function (d) { return d['project_belong'] === unit && (!speach || d['give_speach'] == '1'); });
    };
    Dataset2019Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dataset2019',
            template: __webpack_require__(/*! raw-loader!./dataset2019.component.html */ "./node_modules/raw-loader/index.js!./src/app/dataset2019/dataset2019.component.html"),
            styles: [__webpack_require__(/*! ./dataset2019.component.css */ "./src/app/dataset2019/dataset2019.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Dataset2019Component);
    return Dataset2019Component;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-section {\r\n    align-items: end;\r\n}\r\n.container {\r\n    margin-bottom: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLXNlY3Rpb24ge1xyXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.logout = function () {
        this.userService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin-bottom: 2em;\r\n}\r\nbutton {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcclxufVxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.group = '';
        this.email = '';
        this.formType = 'login';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.email = localStorage.getItem('email');
        this.group = localStorage.getItem('group');
        this.remeber = localStorage.getItem('remeber') === 'true';
    };
    LoginComponent.prototype.login = function () {
        var self = this;
        this.userService.login(this.email, this.group).then(function (name) {
            if (self.remeber) {
                localStorage.setItem('email', self.email);
                localStorage.setItem('group', self.group);
                localStorage.setItem('remeber', 'true');
            }
            self.router.navigateByUrl('/algorithms');
        }).catch(function (reason) {
            self.errorToast = '登入失敗，錯誤訊息：' + reason;
        });
    };
    LoginComponent.prototype.register = function () {
        var self = this;
        this.userService.register({
            email: this.email,
            group: this.group,
        }).then(function (name) {
            self.router.navigateByUrl('/algorithms');
        }).catch(function (reason) {
            self.errorToast = '登入失敗，錯誤訊息：' + reason;
        });
    };
    LoginComponent.prototype.useForm = function (type) {
        this.formType = type;
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news/info/info.component.css":
/*!**********************************************!*\
  !*** ./src/app/news/info/info.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-image img {\r\n    height: 180px;\r\n    width: 100%;\r\n}\r\n.card-body {\r\n    max-height: 130px;\r\n    overflow: hidden;\r\n}\r\n.overflow-cover {\r\n    position: relative;\r\n    margin-top: -30px;\r\n    height: 30px;\r\n    background: linear-gradient(\r\n    rgb(255, 255, 255, 0) 15%,\r\n    rgba(255, 255, 255, 1) 100%\r\n    );\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaOzs7S0FHQztBQUNMIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9pbmZvL2luZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltYWdlIGltZyB7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLm92ZXJmbG93LWNvdmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiKDI1NSwgMjU1LCAyNTUsIDApIDE1JSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJVxyXG4gICAgKTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/info/info.component.ts":
/*!*********************************************!*\
  !*** ./src/app/news/info/info.component.ts ***!
  \*********************************************/
/*! exports provided: NewsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsInfoComponent", function() { return NewsInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsInfoComponent = /** @class */ (function () {
    function NewsInfoComponent() {
    }
    NewsInfoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsInfoComponent.prototype, "post", void 0);
    NewsInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-info',
            template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/news/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsInfoComponent);
    return NewsInfoComponent;
}());



/***/ }),

/***/ "./src/app/news/news.component.css":
/*!*****************************************!*\
  !*** ./src/app/news/news.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divider::after {\r\n    background: none;\r\n}\r\n.news-items {\r\n    margin-bottom: 1.2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXI6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuLm5ld3MtaXRlbXMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/*!****************************************!*\
  !*** ./src/app/news/news.component.ts ***!
  \****************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
        this.posts = [
            {
                id: 1,
                title: '範例文章標題X',
                date: new Date(),
                author: {
                    name: '某人',
                    link: '//fb.com/yu.chen.142857'
                },
                image: '//i.imgur.com/mM3xVtJ.jpg',
                content: '人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。'
            },
            {
                id: 1,
                title: '範例文章標題2',
                date: new Date(),
                author: {
                    name: '某人',
                    link: '//fb.com/yu.chen.142857'
                },
                image: '//i.imgur.com/mM3xVtJ.jpg',
                content: '人受獎之不中呢樓異地安學手決樣是里斯股結樂是會確過的在時法動童獎科子改團去滿親到。助天友：了的於？遠有下回定下病東作進起正類說案理政再黨下問的：是有工歡響望來員形夫然臺得地值；打頭親地線苦大當境給中；在政嚴母己算前質你活他可突、區始你、相收去後黑關因多海定直生銷成軍。北他明也臉高跟女興不於，下然排統調觀我力的因真十或上行少動學手化運象理才園裡清在聽接打文事葉好不看一父文經。將為馬面書而功次們！紅後中而文女會根體統動以己兒步人緊當水弟男的速商地舞我過出但時知就子。灣對名有質極也為球他市然怎如近能樣施。界用體汽好但各，安門傳，個身成他，府常遠空機公農員下也白福響！任上活由去大年發環元精結信山廣人提出手團些辦以校當屋他一北裝德出課球北但完參的門都火政你我除的種是種康！去日時年務出……黃類然發子早……都車兒溫；過視得，動樣分灣整國家生。'
            }
        ];
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/news/post/post.component.css":
/*!**********************************************!*\
  !*** ./src/app/news/post/post.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    padding: 1em 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9wb3N0L3Bvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/news/post/post.component.ts":
/*!*********************************************!*\
  !*** ./src/app/news/post/post.component.ts ***!
  \*********************************************/
/*! exports provided: NewsPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPostComponent", function() { return NewsPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsPostComponent = /** @class */ (function () {
    function NewsPostComponent() {
    }
    NewsPostComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsPostComponent.prototype, "post", void 0);
    NewsPostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-post',
            template: __webpack_require__(/*! raw-loader!./post.component.html */ "./node_modules/raw-loader/index.js!./src/app/news/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/news/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsPostComponent);
    return NewsPostComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/tasks/form/form.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/form/form.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/tasks/form/form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/tasks/info/info.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/info/info.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2luZm8vaW5mby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/info/info.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/info/info.component.ts ***!
  \**********************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfoComponent = /** @class */ (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    InfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-info',
            template: __webpack_require__(/*! raw-loader!./info.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/info/info.component.html"),
            styles: [__webpack_require__(/*! ./info.component.css */ "./src/app/tasks/info/info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfoComponent);
    return InfoComponent;
}());



/***/ }),

/***/ "./src/app/tasks/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/tasks/item/item.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tasks/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tasks/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemComponent = /** @class */ (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! raw-loader!./item.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/tasks/item/item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TasksComponent = /** @class */ (function () {
    function TasksComponent() {
    }
    TasksComponent.prototype.ngOnInit = function () {
    };
    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/index.js!./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(httpClient) {
        this.httpClient = httpClient;
        this._token = '';
        this._email = '';
        this._logined = false;
        this.inited = false;
        this.initedCallback = [];
        if (localStorage.getItem('token')) {
            var request = httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "auth/status", { params: {
                    token: localStorage.getItem('token')
                } });
            var self_1 = this;
            request.subscribe(function (data) {
                if (data.success) {
                    self_1._token = localStorage.getItem('token');
                    self_1._logined = true;
                    self_1._email = data.email;
                }
                else {
                    console.log(data);
                    localStorage.removeItem('token');
                }
                self_1.inited = true;
                self_1.initedCallback.forEach(function (cb) { return cb(); });
            }, function (err) {
                console.error(err);
                localStorage.removeItem('token');
                self_1.inited = true;
                self_1.initedCallback.forEach(function (cb) { return cb(); });
            });
        }
        else {
            this.inited = true;
            this.initedCallback.forEach(function (cb) { return cb(); });
        }
    }
    Object.defineProperty(UserService.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "logined", {
        get: function () {
            return this._logined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserService.prototype, "token", {
        get: function () {
            return this._token;
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.registerInitedCallback = function (callback) {
        if (this.inited)
            callback();
        else
            this.initedCallback.push(callback);
    };
    UserService.prototype.login = function (email, group) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "auth/login", { email: email, group: group });
            request.subscribe(function (data) {
                if (data.success) {
                    self._token = data.token;
                    self._logined = true;
                    self._email = data.email;
                    localStorage.setItem('token', data.token);
                    resolve(data.email);
                }
                else {
                    reject(data.reason);
                }
            });
        });
    };
    UserService.prototype.logout = function () {
        var self = this;
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "auth/logout", { token: self.token });
            request.subscribe(function (data) {
                if (data.success) {
                    self._token = '';
                    self._logined = false;
                    self._email = '';
                    resolve(true);
                }
                else {
                    reject(false);
                }
            });
        });
    };
    UserService.prototype.register = function (data) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var request = self.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "auth/register", data);
            request.subscribe(function (data) {
                if (data.success) {
                    self._token = data.token;
                    self._logined = true;
                    self._email = data.email;
                    resolve(data.email);
                }
                else {
                    reject(data.reason);
                }
            });
        });
    };
    UserService.prototype.getProfile = function () {
    };
    UserService.prototype.updateProfile = function () {
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://taitk.this/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\taitk\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
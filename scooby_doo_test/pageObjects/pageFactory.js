"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFactory = void 0;
const index_1 = require("../pageObjects/pages/index");
const login_1 = require("../pageObjects/pages/login");
const header_1 = require("../pageObjects/components/header");
const add_member_1 = require("../pageObjects/pages/add_member");
const remove_member_1 = require("../pageObjects/pages/remove_member");
const view_member_1 = require("../pageObjects/pages/view_member");
const edit_member_1 = require("../pageObjects/pages/edit_member");
const family_tree_1 = require("../pageObjects/pages/family_tree");
class PageFactory {
    constructor(page) {
        this.page = page;
    }
    getIndexPage() {
        if (!this.indexPage) {
            this.indexPage = new index_1.IndexPage(this.page);
        }
        return this.indexPage;
    }
    getLoginPage() {
        if (!this.loginPage) {
            this.loginPage = new login_1.LoginPage(this.page);
        }
        return this.loginPage;
    }
    getHeaderComp() {
        if (!this.headerComp) {
            this.headerComp = new header_1.HeaderComp(this.page);
        }
        return this.headerComp;
    }
    getAddMemberPage() {
        if (!this.addMemberPage) {
            this.addMemberPage = new add_member_1.AddMemberPage(this.page);
        }
        return this.addMemberPage;
    }
    getRemoveMemberPage() {
        if (!this.removeMemberPage) {
            this.removeMemberPage = new remove_member_1.RemoveMemberPage(this.page);
        }
        return this.removeMemberPage;
    }
    getViewMemberPage() {
        if (!this.viewMemberPage) {
            this.viewMemberPage = new view_member_1.ViewMemberPage(this.page);
        }
        return this.viewMemberPage;
    }
    getEditMemberPage() {
        if (!this.editMemberPage) {
            this.editMemberPage = new edit_member_1.EditMemberPage(this.page);
        }
        return this.editMemberPage;
    }
    getFamilyTreePage() {
        if (!this.familyTreePage) {
            this.familyTreePage = new family_tree_1.FamilyTreePage(this.page);
        }
        return this.familyTreePage;
    }
}
exports.PageFactory = PageFactory;

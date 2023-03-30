import halo from "../../../fixtures/halo.json"
class HaloHomePO {

    getProductCard() {
        return cy.get('.ProductCardBlock.productcard')
    }

    getMySchedule() {
        return cy.get('.nav > :nth-child(1) > .nav-link')
    }

    getProgress() {
        return cy.get('.nav > :nth-child(2) > .nav-link')
    }

    getFeature() {
        cy.get('#nav-dropdown').click()
    }

    getFeatureMenu() {
        const menuItemsDD = ['Email templates', 'Talk with teacher', 'Accents and dialects', 'News feed']
        cy.get('.dropdown-item').should(($els) => {
            const elsText2 = $els.toArray().map(el => el.innerText)
            expect(elsText2).to.deep.eq(menuItemsDD)
        })
    }

    getFeatureOption() {
        return cy.get('.dropdown-item')
    }

    getCulturalNotes() {
        return cy.get('.nav .dropdown > .dropdown-menu > :nth-child(1)')
    }

    getEmailTemplet() {
        return cy.get('.dropdown-menu > :nth-child(1) > a')
    }

    getAccentsDialects() {
        return cy.get('.nav .dropdown > .dropdown-menu > :nth-child(3)')
    }

    getUserDropdown() {
        return cy.get('.burger-menu')
    }

    getDDUsername() {
        return cy.get('.menu-uname-block')
    }

    getScrollToView() {
        cy.get('.Listalign').scrollIntoView()
    }

    getUserprofile() {
        return cy.get('.burger-menu > .dropdown-menu > :nth-child(3)')
    }

    getLanguageDD() {
        return cy.get('.language_dropdown.dropdown.nav-item')
    }

    getLangDDList() {
        return cy.get('.dropdown-menu > div').find('.dropdown-item')
    }

    getLanguageList() {
        const languages = ['Italiano', 'Deutsch', '日本語', 'Español', 'Português', '中文(简体)', 'Français'];
        this.getLangDDList().should(($els) => {
            const elsText = $els.toArray().map(el => el.innerText)
            expect(elsText).to.deep.eq(languages)
        })
    }

    escape() {
        cy.get('body').trigger('keyup', { keyCode: 27 });
    }

    switchLanguages() {
        cy.get('.dropdown-menu > div').find('.dropdown-item').each((ddLength, index) => {
            this.getLanguageDD().click()
            cy.get('.dropdown-menu > div > :nth-child(' + (index + 1) + ')').click().then(lang => {
                let langText = lang.text()
                console.log(langText)

                if (langText === 'Italiano') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'Guida ')
                    cy.get('.PageContainerBlock > p').should('have.text', 'Clicchi su un corso qui in basso per cominciare')
                    cy.get('.Listalign > .headeralign').should('have.text', ' Caratteristiche ')

                    const Footer = ['Informazioni ', 'Note legali', 'Norme sulla privacy', 'Termini e condizioni']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === 'Deutsch') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'Hilfe ')
                    cy.get('.PageContainerBlock > p').should('have.text', 'Klicken Sie auf einen der Kurse, um loszulegen.')
                    cy.get('.Listalign > .headeralign').should('have.text', ' Features ')

                    const Footer = ['Info', 'Impressum', 'Datenschutzerklärung', 'Allgemeine Geschäftsbedingungen']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === '日本語') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'ヘルプ ')
                    cy.get('.PageContainerBlock > p').should('have.text', '開始するには以下のコースをクリックしてください。')
                    cy.get('.Listalign > .headeralign').should('have.text', ' 機能 ')

                    const Footer = ['会社概要', '法律条項', 'プライバシー ポリシー', '使用条件']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === 'Español') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'Ayuda ')
                    cy.get('.PageContainerBlock > p').should('have.text', 'Pulsa en un curso para comenzar.')
                    cy.get('.Listalign > .headeralign').should('have.text', ' Características ')

                    const Footer = ['Sobre', 'Legal', 'Política de privacidad', 'Términos y condiciones']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === 'Português') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'Ajuda ')
                    cy.get('.PageContainerBlock > p').should('have.text', 'Clique em um curso abaixo para começar.')
                    cy.get('.Listalign > .headeralign').should('have.text', ' Recursos ')

                    const Footer = ['Sobre', 'Jurídico', 'Política de Privacidade', 'Termos e condições']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === '中文(简体)') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', '帮助 ')
                    cy.get('.PageContainerBlock > p').should('have.text', '点击下面的课程开始')
                    cy.get('.Listalign > .headeralign').should('have.text', ' 功能 ')

                    const Footer = ['关于', '法律', '隐私政策', '条款及细则']
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
                else if (langText === 'Français') {
                    cy.get('#basic-nav-dropdown-support').should('have.text', 'Aide ')
                    cy.get('.PageContainerBlock > p').should('have.text', 'Cliquer sur une formation ci-dessous pour commencer')
                    cy.get('.Listalign > .headeralign').should('have.text', ' Fonctionnalités ')

                    const Footer = ['À propos', 'Mentions légales', 'Politique de confidentialité', `Conditions générales d'utilisation`]
                    cy.get('.Footer_redirections > span > a').should(footer => {
                        const footerText = footer.toArray().map(el => el.innerText)
                        expect(footerText).to.deep.eq(Footer)
                    })
                }
            })
        })
        //english
        this.getLanguageDD().click()
        cy.get('.dropdown-menu > div').find(':nth-child(1)').click()
    }

    gethelpDD() {
        return cy.get('#basic-nav-dropdown-support')
    }

    getFaq() {
        return cy.get('.help_dropdown.dropdown .dropdown-menu :nth-child(1)')
    }

    getCustomerSupport() {
        return cy.get('.help_dropdown.dropdown .dropdown-menu :nth-child(2)')
    }

    getFeatureHeader() {
        return cy.get('.Listalign > .headeralign')
    }

    getFeatureCardTitle() {
        cy.get('.featuresCardsContainer').find('.ProductCardBlock').each(($el, index) => {
            const text = $el.find('.pCardTitle').text()
            const menuItemsDD = ['Culture center', 'Email templates', 'Talk with teacher', 'Accents and dialects', 'Vocabulary center',
                'Stress and intonation', 'Sounds of english', 'Writing center', 'Global community tutorials', 'News feed']
            expect(text).to.contain(menuItemsDD[index])
        })
    }

    getFeatureCard() {
        return cy.get('.featuresCardsContainer > a')
    }

    getProductMenu() {
        const menuItems = ['My schedule', 'Progress', 'Features']
        cy.get('.sub_Header > .nav.nav-pills').find('.nav-item').should(($els) => {
            const elsText1 = $els.toArray().map(el => el.innerText)
            expect(elsText1).to.deep.eq(menuItems)
        })
    }

    getProductName() {
        cy.get('.ProductCardBlock.productcard').find('.pCardTitle').each(($el) => {
            let productName = $el.text().trim()
            cy.get('#basic-nav-dropdown').then((username) => {
                let uname = username.text().trim()
                if (uname === cred.sprintEnglish_completed) {
                    expect(productName).contains(halo.home.productName.sprintEnglish)
                } else if (uname === cred.sprintGerman_new) {
                    expect(productName).eq(halo.home.productName.sprintGerman)
                } else if (uname === cred.elevateEnglish_new) {
                    expect(productName).eq(halo.home.productName.elevateEnglish)
                } else if (uname === cred.soloGerman_new) {
                    expect(productName).eq(halo.home.productName.soloGerman)
                }
            })
        })
    }

    getCradValues() {
        cy.get('.active-course-lbl').should('have.text', halo.home.completed_status)
    }

    getCardButton() {
        cy.get('.ProductCardBlock.productcard').find('.MuiButton-label').should('have.text', halo.home.completed_cardButton)
    }

    //Footer
    getFooterOptions() {
        cy.get('.FooterStyle').scrollIntoView()
        cy.get('.Footer_redirections').find('.HeaderLinks')
            .each(($el, index) => {
                const text = $el.text()
                const footerLink = ['About', 'Legal', 'Privacy policy', 'Terms and conditions']
                expect(text).to.contain(footerLink[index])
            })
    }


    getCopyright() {
        return cy.get('.social-icons')
    }

    getFooterLink() {
        return cy.get('.Footer_redirections > span > a')
    }

    getLogout() {
        cy.get('.logout_btn').click()
    }

}
export default HaloHomePO
(function(e) {
    function t(t) {
        for (var a, s, c = t[0], o = t[1], l = t[2], d = 0, m = []; d < c.length; d++) s = c[d], Object.prototype.hasOwnProperty.call(r, s) && r[s] && m.push(r[s][0]), r[s] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        u && u(t);
        while (m.length) m.shift()();
        return i.push.apply(i, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, c = 1; c < n.length; c++) {
                var o = n[c];
                0 !== r[o] && (a = !1)
            }
            a && (i.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var a = {},
        r = {
            app: 0
        },
        i = [];

    function s(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = a, s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) s.d(n, a, function(t) {
                return e[t]
            }.bind(null, a));
        return n
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/";
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        o = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var l = 0; l < c.length; l++) t(c[l]);
    var u = o;
    i.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    1: function(e, t) {},
    10: function(e, t) {},
    11: function(e, t) {},
    12: function(e, t) {},
    13: function(e, t) {},
    14: function(e, t) {},
    15: function(e, t) {},
    16: function(e, t) {},
    17: function(e, t) {},
    18: function(e, t) {},
    19: function(e, t) {},
    2: function(e, t) {},
    20: function(e, t) {},
    21: function(e, t) {},
    22: function(e, t) {},
    23: function(e, t) {},
    3: function(e, t) {},
    4: function(e, t) {},
    5: function(e, t) {},
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("1da1"),
            r = (n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("96cf"), n("7a23")),
            i = Object(r["f"])('<nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav"><div class="container px-5"><a class="navbar-brand fw-bold" href="/">BuddyTestament</a></div></nav><header class="masthead" style="padding-top:2rem;"></header><aside class="text-center bg-gradient-primary-to-secondary"><div class="container px-5"><div class="row gx-5 justify-content-center"><div class="col-sm-12"><div class="h2 fs-3 text-white mb-0"><p>With crypto, control your money.</p><p class="mb-0">With BuddyTestament, you decide who gets it after you&#39;re gone.</p></div></div></div></div></aside>', 3),
            s = {
                class: "main",
                style: {
                    "padding-top": "1.5rem",
                    "padding-bottom": "1rem"
                }
            },
            c = {
                key: 0,
                class: "container-dapp container-sm"
            },
            o = {
                class: "alert alert-danger mb-1",
                role: "alert",
                style: {
                    "word-break": "break-word"
                }
            },
            l = {
                key: 1,
                class: "container-dapp container-sm text-muted"
            },
            u = {
                key: 0,
                class: "alert alert-info mb-5 text-center",
                role: "alert"
            },
            d = Object(r["g"])("You don't have a testament yet. Please use the form below to create one."),
            m = Object(r["e"])("br", null, null, -1),
            p = [d, m],
            f = {
                key: 1
            },
            b = {
                class: "card shadow rounded mb-4"
            },
            y = {
                class: "card-body"
            },
            h = Object(r["e"])("h5", {
                class: "card-title text-primary text-center mb-3"
            }, "Testament status", -1),
            g = {
                class: "text-center"
            },
            O = {
                key: 0
            },
            v = {
                key: 1,
                class: "alert alert-danger text-center mt-3"
            },
            w = Object(r["e"])("strong", null, "Your testament will soon be unlocked for execution!", -1),
            j = Object(r["e"])("br", null, null, -1),
            x = Object(r["g"])(" You must make a deposit, a withdraw or edit the testament details to keep it locked. "),
            T = [w, j, x],
            k = {
                key: 1
            },
            C = Object(r["e"])("strong", {
                class: "text-warning"
            }, "UNLOCKED FOR EXECUTION", -1),
            A = Object(r["e"])("div", {
                class: "alert alert-warning text-center mt-3"
            }, " Your testament will be executed soon. ", -1),
            S = [C, A],
            E = {
                key: 2
            },
            B = Object(r["e"])("strong", {
                class: "text-danger"
            }, "CANCELLED", -1),
            N = Object(r["e"])("div", {
                class: "alert alert-info text-center mt-3"
            }, " You can still withdraw your funds or reactivate the testament. ", -1),
            M = [B, N],
            I = {
                key: 3
            },
            L = Object(r["e"])("strong", {
                class: "text-success"
            }, "EXECUTED", -1),
            P = Object(r["e"])("div", {
                class: "alert alert-success text-center mt-3"
            }, " Funds were transferred to the beneficiary. ", -1),
            R = [L, P],
            V = {
                class: "text-center mt-3 mb-1"
            },
            U = ["disabled"],
            D = ["disabled"],
            K = {
                key: 0,
                class: "card shadow rounded mb-4"
            },
            F = {
                class: "card-body"
            },
            W = Object(r["e"])("h5", {
                class: "card-title text-primary text-center mb-3"
            }, "Testament funds", -1),
            J = {
                key: 0,
                class: "text-center mb-4"
            },
            Y = Object(r["e"])("strong", null, "Deposit SETH ", -1),
            z = Object(r["e"])("br", null, null, -1),
            Z = {
                class: "d-flex align-items justify-content-center mt-2"
            },
            Q = ["disabled"],
            H = ["disabled"],
            G = {
                key: 1,
                class: "alert alert-warning text-center"
            },
            X = {
                class: "text-center mb-2"
            },
            _ = Object(r["g"])("Withdraw SETH ("),
            q = Object(r["g"])(") "),
            $ = {
                class: "text-center mb-1"
            },
            ee = {
                class: "d-flex align-items justify-content-center"
            },
            te = ["disabled"],
            ne = ["disabled"],
            ae = {
                key: 1,
                class: "card shadow rounded mb-4"
            },
            re = {
                class: "card-body"
            },
            ie = Object(r["e"])("h5", {
                class: "card-title text-primary text-center mb-3"
            }, "Testament funds", -1),
            se = {
                class: "alert alert-warning text-center mb-2"
            },
            ce = {
                class: "card shadow rounded mb-2"
            },
            oe = {
                class: "card-body"
            },
            le = Object(r["e"])("h5", {
                class: "card-title text-primary text-center mb-3"
            }, "Testament details", -1),
            ue = {
                key: 0,
                class: "alert alert-warning text-center mb-3"
            },
            de = {
                class: "mb-3"
            },
            me = Object(r["e"])("label", {
                for: "txtName",
                autofocus: "",
                class: "form-label fw-bold"
            }, "Your name:", -1),
            pe = ["disabled"],
            fe = Object(r["e"])("div", {
                class: "form-text text-italic"
            }, "When your testament is about to be executed, we'll warn you using this name.", -1),
            be = {
                class: "mb-3"
            },
            ye = Object(r["e"])("label", {
                for: "txtContact",
                class: "form-label fw-bold"
            }, "Your email:", -1),
            he = ["disabled"],
            ge = Object(r["e"])("div", {
                class: "form-text"
            }, "When your testament is about to be executed, we'll warn you using this email.", -1),
            Oe = {
                class: "mb-3"
            },
            ve = Object(r["e"])("label", {
                for: "txtName",
                autofocus: "",
                class: "form-label fw-bold"
            }, "Beneficiary name:", -1),
            we = ["disabled"],
            je = Object(r["e"])("div", {
                class: "form-text"
            }, "When the funds in the testament are transferred, we'll notify the beneficiary using this name.", -1),
            xe = {
                class: "mb-3"
            },
            Te = Object(r["e"])("label", {
                for: "txtContact",
                class: "form-label fw-bold"
            }, "Beneficiary email:", -1),
            ke = ["disabled"],
            Ce = Object(r["e"])("div", {
                class: "form-text"
            }, "When the funds in the testament are transferred, we'll notify the beneficiary using this email.", -1),
            Ae = {
                class: "mb-3"
            },
            Se = Object(r["e"])("label", {
                for: "txtContact",
                class: "form-label fw-bold"
            }, "Beneficiary wallet address:", -1),
            Ee = ["disabled"],
            Be = Object(r["e"])("div", {
                class: "form-text"
            }, "The wallet address of the beneficiary that should receive the funds locked in the testament.", -1),
            Ne = {
                class: "mb-3"
            },
            Me = {
                for: "txtContact",
                class: "form-label mb-0 fw-bold"
            },
            Ie = ["disabled"],
            Le = Object(r["e"])("div", {
                class: "form-text mt-0"
            }, "For how many days should the testament stay locked after you send a proof of life (make a deposit, a withdraw or change the testament details)? Example: if you choose 30 days, your testament will be unlocked if more than 30 days pass since your last transaction.", -1),
            Pe = {
                class: "text-center mb-1"
            },
            Re = ["disabled"],
            Ve = ["disabled"],
            Ue = ["disabled"],
            De = Object(r["e"])("footer", {
                class: "bg-black text-center py-5"
            }, [Object(r["e"])("div", {
                class: "container px-5"
            }, [Object(r["e"])("div", {
                class: "text-white-50 small"
            }, [Object(r["e"])("div", {
                class: "mb-0"
            }, "BuddyTestament 2023")])])], -1);

        function Ke(e, t, n, a, d, m) {
            return Object(r["i"])(), Object(r["d"])(r["a"], null, [i, Object(r["e"])("div", s, [null !== e.loadingError ? (Object(r["i"])(), Object(r["d"])("div", c, [Object(r["e"])("div", o, " Failure loading dApp: " + Object(r["j"])(e.loadingError) + ". ", 1)])) : Object(r["c"])("", !0), null === e.loadingError ? (Object(r["i"])(), Object(r["d"])("div", l, [null === e.testament ? (Object(r["i"])(), Object(r["d"])("div", u, p)) : Object(r["c"])("", !0), null !== e.testament ? (Object(r["i"])(), Object(r["d"])("div", f, [Object(r["e"])("div", b, [Object(r["e"])("div", y, [h, Object(r["e"])("div", g, [m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("div", O, [m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("strong", {
                key: 0,
                class: Object(r["h"])({
                    "text-danger": m.testamentNotifiable
                })
            }, "Locked until " + Object(r["j"])(m.formattedUnlockTime), 3)) : Object(r["c"])("", !0), m.testamentNotifiable ? (Object(r["i"])(), Object(r["d"])("div", v, T)) : Object(r["c"])("", !0)])) : Object(r["c"])("", !0), m.testamentUnlocked ? (Object(r["i"])(), Object(r["d"])("div", k, S)) : Object(r["c"])("", !0), m.testamentCancelled ? (Object(r["i"])(), Object(r["d"])("div", E, M)) : Object(r["c"])("", !0), m.testamentExecuted ? (Object(r["i"])(), Object(r["d"])("div", I, R)) : Object(r["c"])("", !0)]), Object(r["e"])("div", V, [m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("button", {
                key: 0,
                type: "button",
                class: "btn btn-danger",
                onClick: t[0] || (t[0] = function() {
                    return m.cancelTestament && m.cancelTestament.apply(m, arguments)
                }),
                disabled: e.processing
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Cancel testament"), 9, U)) : Object(r["c"])("", !0), m.testamentCancelled ? (Object(r["i"])(), Object(r["d"])("button", {
                key: 1,
                type: "button",
                class: "btn btn-success",
                onClick: t[1] || (t[1] = function() {
                    return m.reactivateTestament && m.reactivateTestament.apply(m, arguments)
                }),
                disabled: e.processing
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Reactivate testament"), 9, D)) : Object(r["c"])("", !0)])])]), m.testamentLocked || m.testamentCancelled ? (Object(r["i"])(), Object(r["d"])("div", K, [Object(r["e"])("div", F, [W, m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("div", J, [Y, z, Object(r["e"])("div", Z, [Object(r["l"])(Object(r["e"])("input", {
                class: "form-control text-center",
                style: {
                    width: "50%",
                    display: "inline-block"
                },
                "onUpdate:modelValue": t[2] || (t[2] = function(t) {
                    return e.inputDepositAmount = t
                }),
                disabled: e.processing
            }, null, 8, Q), [
                [r["k"], e.inputDepositAmount]
            ])]), Object(r["e"])("button", {
                type: "button",
                class: "btn btn-success mt-2",
                onClick: t[3] || (t[3] = function() {
                    return m.depositFunds && m.depositFunds.apply(m, arguments)
                }),
                disabled: !m.validDepositAmount || e.processing
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Deposit funds"), 9, H)])) : (Object(r["i"])(), Object(r["d"])("div", G, " You can't deposit funds because this testament has been " + Object(r["j"])(m.testamentStatusString) + ". ", 1)), Object(r["e"])("div", X, [Object(r["e"])("strong", null, [_, Object(r["e"])("a", {
                href: "javascript:void(0)",
                onClick: t[4] || (t[4] = function() {
                    return m.setMaxWithdrawAmount && m.setMaxWithdrawAmount.apply(m, arguments)
                }),
                style: {
                    "font-size": "90%"
                }
            }, Object(r["j"])(m.formattedBalance), 1), q])]), Object(r["e"])("div", $, [Object(r["e"])("div", ee, [Object(r["l"])(Object(r["e"])("input", {
                class: "form-control text-center",
                style: {
                    width: "50%",
                    display: "inline-block"
                },
                "onUpdate:modelValue": t[5] || (t[5] = function(t) {
                    return e.inputWithdrawAmount = t
                }),
                disabled: e.processing
            }, null, 8, te), [
                [r["k"], e.inputWithdrawAmount]
            ])]), Object(r["e"])("button", {
                type: "button",
                class: "btn btn-warning mt-2",
                onClick: t[6] || (t[6] = function() {
                    return m.withdrawFunds && m.withdrawFunds.apply(m, arguments)
                }),
                disabled: !m.validWithdrawAmount || e.processing
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Withdraw funds"), 9, ne)])])])) : (Object(r["i"])(), Object(r["d"])("div", ae, [Object(r["e"])("div", re, [ie, Object(r["e"])("div", se, " You can't deposit or withdraw funds because this testament has been " + Object(r["j"])(m.testamentStatusString) + ". ", 1)])]))])) : Object(r["c"])("", !0), Object(r["e"])("div", ce, [Object(r["e"])("div", oe, [le, null === e.testament || m.testamentLocked ? Object(r["c"])("", !0) : (Object(r["i"])(), Object(r["d"])("div", ue, " You can't edit the details because this testament has been " + Object(r["j"])(m.testamentStatusString) + ". ", 1)), Object(r["e"])("div", de, [me, Object(r["l"])(Object(r["e"])("input", {
                type: "text",
                class: Object(r["h"])(["form-control", {
                    "bg-danger bg-opacity-50": e.formInputChanged["testatorName"] && !m.nameValid
                }]),
                ref: "txtName",
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[7] || (t[7] = function(t) {
                    return e.inputName = t
                }),
                onInput: t[8] || (t[8] = function(e) {
                    return m.formChanged("testatorName")
                })
            }, null, 42, pe), [
                [r["k"], e.inputName]
            ]), fe]), Object(r["e"])("div", be, [ye, Object(r["l"])(Object(r["e"])("input", {
                type: "text",
                class: Object(r["h"])(["form-control", {
                    "bg-danger bg-opacity-50": e.formInputChanged["testatorEmail"] && !m.emailValid
                }]),
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[9] || (t[9] = function(t) {
                    return e.inputEmail = t
                }),
                onInput: t[10] || (t[10] = function(e) {
                    return m.formChanged("testatorEmail")
                })
            }, null, 42, he), [
                [r["k"], e.inputEmail]
            ]), ge]), Object(r["e"])("div", Oe, [ve, Object(r["l"])(Object(r["e"])("input", {
                type: "text",
                class: Object(r["h"])(["form-control", {
                    "bg-danger bg-opacity-50": e.formInputChanged["beneficiaryName"] && !m.beneficiaryNameValid
                }]),
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[11] || (t[11] = function(t) {
                    return e.inputBeneficiaryName = t
                }),
                onInput: t[12] || (t[12] = function(e) {
                    return m.formChanged("beneficiaryName")
                })
            }, null, 42, we), [
                [r["k"], e.inputBeneficiaryName]
            ]), je]), Object(r["e"])("div", xe, [Te, Object(r["l"])(Object(r["e"])("input", {
                type: "text",
                class: Object(r["h"])(["form-control", {
                    "bg-danger bg-opacity-50": e.formInputChanged["beneficiaryEmail"] && !m.beneficiaryEmailValid
                }]),
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[13] || (t[13] = function(t) {
                    return e.inputBeneficiaryEmail = t
                }),
                onInput: t[14] || (t[14] = function(e) {
                    return m.formChanged("beneficiaryEmail")
                })
            }, null, 42, ke), [
                [r["k"], e.inputBeneficiaryEmail]
            ]), Ce]), Object(r["e"])("div", Ae, [Se, Object(r["l"])(Object(r["e"])("input", {
                type: "text",
                class: Object(r["h"])(["form-control", {
                    "bg-danger bg-opacity-50": e.formInputChanged["beneficiaryAddress"] && !m.beneficiaryAddressValid
                }]),
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[15] || (t[15] = function(t) {
                    return e.inputBeneficiaryAddress = t
                }),
                onInput: t[16] || (t[16] = function(e) {
                    return m.formChanged("beneficiaryAddress")
                })
            }, null, 42, Ee), [
                [r["k"], e.inputBeneficiaryAddress]
            ]), Be]), Object(r["e"])("div", Ne, [Object(r["e"])("label", Me, "Proof of life threshold: " + Object(r["j"])(e.inputProofOfLife + " days"), 1), Object(r["l"])(Object(r["e"])("input", {
                type: "range",
                class: "form-range",
                min: "30",
                max: "365",
                disabled: !e.editMode && null !== e.testament || e.processing,
                "onUpdate:modelValue": t[17] || (t[17] = function(t) {
                    return e.inputProofOfLife = t
                }),
                onInput: t[18] || (t[18] = function() {
                    return e.formInput && e.formInput.apply(e, arguments)
                })
            }, null, 40, Ie), [
                [r["k"], e.inputProofOfLife]
            ]), Le]), Object(r["e"])("div", Pe, [!e.editMode && null !== e.testament && m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("button", {
                key: 0,
                type: "button",
                class: "btn btn-primary",
                onClick: t[19] || (t[19] = function() {
                    return m.editTestament && m.editTestament.apply(m, arguments)
                }),
                disabled: e.processing
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Edit details"), 9, Re)) : Object(r["c"])("", !0), e.editMode && null !== e.testament && m.testamentLocked ? (Object(r["i"])(), Object(r["d"])("button", {
                key: 1,
                type: "button",
                class: "btn btn-danger",
                style: {
                    "margin-right": "1rem"
                },
                onClick: t[20] || (t[20] = function() {
                    return m.cancelTestamentChanges && m.cancelTestamentChanges.apply(m, arguments)
                }),
                disabled: e.processing
            }, "Cancel", 8, Ve)) : Object(r["c"])("", !0), e.editMode || null === e.testament ? (Object(r["i"])(), Object(r["d"])("button", {
                key: 2,
                type: "button",
                class: "btn btn-success",
                onClick: t[21] || (t[21] = function() {
                    return m.setupTestament && m.setupTestament.apply(m, arguments)
                }),
                disabled: e.processing || !m.formValid
            }, Object(r["j"])(e.processing ? "Please, wait..." : "Save"), 9, Ue)) : Object(r["c"])("", !0)])])])])) : Object(r["c"])("", !0)]), De], 64)
        }
        n("a9e3"), n("498a"), n("d3b7"), n("25f0"), n("ac1f"), n("5319");
        var Fe = {
                instance: {
                    loadingError: null,
                    walletAddress: null,
                    editMode: !1,
                    processing: !1,
                    testament: null,
                    status: null,
                    formInputChanged: {
                        testatorName: !1,
                        testatorEmail: !1
                    },
                    inputDepositAmount: "",
                    inputWithdrawAmount: "",
                    inputName: "",
                    inputEmail: "",
                    inputBeneficiaryName: "",
                    inputBeneficiaryEmail: "",
                    inputBeneficiaryAddress: "",
                    inputProofOfLife: 30
                }
            },
            We = n("5530"),
            Je = (n("d81d"), n("b64b"), n("100f")),
            Ye = n.n(Je),
            ze = n("2eaf"),
            Ze = n("31af"),
            Qe = n.n(Ze),
            He = n("9721"),
            Ge = n("8f0a"),
            Xe = n("07b1"),
            _e = n("eb2c"),
            qe = n("99e5"),
            $e = n.n(qe),
            et = (n("00b4"), n("d9e2"), n("4d63"), n("c607"), n("2c3e"), n("1276"), n("466d"), n("99af"), n("b0c0"), n("e9c4"), n("5ba3")),
            tt = n.n(et),
            nt = n("3452"),
            at = n.n(nt),
            rt = n("9816"),
            it = [{
                inputs: [],
                stateMutability: "nonpayable",
                type: "constructor"
            }, {
                inputs: [],
                name: "cancelTestament",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "contractBalance",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "testatorAddress",
                    type: "address"
                }],
                name: "executeTestamentOf",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "reactivateTestament",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [],
                name: "serviceFeeRate",
                outputs: [{
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "serviceOwner",
                outputs: [{
                    internalType: "address",
                    name: "",
                    type: "address"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "_serviceFeeRate",
                    type: "uint256"
                }],
                name: "setServiceFeeRate",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "beneficiaryAddress",
                    type: "address"
                }, {
                    internalType: "uint256",
                    name: "proofOfLifeThreshold",
                    type: "uint256"
                }, {
                    internalType: "string",
                    name: "encryptedKey",
                    type: "string"
                }, {
                    internalType: "string",
                    name: "encryptedInfo",
                    type: "string"
                }],
                name: "setupTestament",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "address",
                    name: "testatorAddress",
                    type: "address"
                }],
                name: "testamentDetailsOf",
                outputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "creationTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "testamentAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "testatorAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "beneficiaryAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "testamentBalance",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "proofOfLifeThreshold",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lastProofOfLifeTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "string",
                        name: "encryptedKey",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "encryptedInfo",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "executionTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "executionBalance",
                        type: "uint256"
                    }, {
                        internalType: "enum TestamentStatus",
                        name: "status",
                        type: "uint8"
                    }, {
                        internalType: "bool",
                        name: "exists",
                        type: "bool"
                    }],
                    internalType: "struct CryptoTestamentService.Testament",
                    name: "",
                    type: "tuple"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "testaments",
                outputs: [{
                    components: [{
                        internalType: "uint256",
                        name: "creationTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "address",
                        name: "testamentAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "testatorAddress",
                        type: "address"
                    }, {
                        internalType: "address",
                        name: "beneficiaryAddress",
                        type: "address"
                    }, {
                        internalType: "uint256",
                        name: "testamentBalance",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "proofOfLifeThreshold",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "lastProofOfLifeTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "string",
                        name: "encryptedKey",
                        type: "string"
                    }, {
                        internalType: "string",
                        name: "encryptedInfo",
                        type: "string"
                    }, {
                        internalType: "uint256",
                        name: "executionTimestamp",
                        type: "uint256"
                    }, {
                        internalType: "uint256",
                        name: "executionBalance",
                        type: "uint256"
                    }, {
                        internalType: "enum TestamentStatus",
                        name: "status",
                        type: "uint8"
                    }, {
                        internalType: "bool",
                        name: "exists",
                        type: "bool"
                    }],
                    internalType: "struct CryptoTestamentService.Testament[]",
                    name: "",
                    type: "tuple[]"
                }],
                stateMutability: "view",
                type: "function"
            }, {
                inputs: [],
                name: "withdrawServiceFees",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                inputs: [{
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256"
                }],
                name: "withdrawTestamentFunds",
                outputs: [],
                stateMutability: "nonpayable",
                type: "function"
            }, {
                stateMutability: "payable",
                type: "receive"
            }],
            st = "0x0C1478E56AA8E344274D8b0a2583904c1696a3Ee",
            ct = 604800,
            ot = "-----BEGIN PUBLIC KEY-----\nMIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQB+b7qrWcuBkpmiCcUBO0RQ\nZjAi6kAivuXUZB5dcJ/HO8zbf9XkseRn3fJEmxXJz/G8qVis14VqPQkv07mEHisr\npweKHRl+YwIsKfOw7kQwzMfiF5X9hNZt9bHaszOPsOxBgKK3bE1W2K04V3MYmFxk\nft4wG2KgVL8czFlfk8COOwnl6tLg/0GqVBy4KWZCz6ZkJbONalAH2zZ6gkCIySio\nxS7mZJMdHOZoZkSBEBOZXHY7SCfGze/+0ggzD9BgBHssivx9lET94XLfT7F0hvJQ\nhj/GVuIojQ9oVW36c5JdJ5aoRdvkhiRVPf0LUh0SAMQapUdgGZ26MBxoBWR0x831\nAgMBAAE=\n-----END PUBLIC KEY-----";

        function lt(e) {
            return "string" === typeof e || e instanceof String
        }

        function ut(e) {
            return void 0 === e || null === e || 0 === e.trim().length
        }

        function dt(e) {
            return /\S+@\S+\.\S+/.test(e)
        }

        function mt(e) {
            return tt.a.isAddress(e)
        }

        function pt(e, t) {
            if (!lt(e)) throw new Error("Pass strings to prevent floating point precision issues.");
            var n = "^(0|[1-9]\\d*)(\\.\\d{0," + t + "})?$";
            if (!1 === new RegExp(n).test(e)) throw new Error("INVALID_NUMBER");
            var a = tt.a.BN,
                r = new a(10),
                i = r.pow(new a(t)),
                s = "-" === e.substring(0, 1);
            if (s && (e = e.substring(1)), "." === e) throw new Error("Invalid value ".concat(e, " cannot be converted to") + " base unit with ".concat(t, " decimals."));
            var c = e.split(".");
            if (c.length > 2) throw new Error("Too many decimal points");
            var o = c[0],
                l = c[1];
            if (o || (o = "0"), l || (l = "0"), l.length > t) throw new Error("Too many decimal places");
            while (l.length < t) l += "0";
            o = new a(o), l = new a(l);
            var u = o.mul(i).add(l);
            return s && (u = u.neg()), new a(u.toString(10), 10)
        }

        function ft(e) {
            return new tt.a.BN(e)
        }

        function bt(e, t) {
            var n = new tt.a.BN(10).pow(new tt.a.BN(t)),
                a = e.mod(n).toString(10);
            while (a.length < t) a = "0".concat(a);
            a = a.match(/^([0-9]*[1-9]|0)(0*)/)[1];
            var r = e.div(n).toString(10);
            e = "".concat(r, ".").concat(a);
            var i = t - a.length;
            while (i > 0) i--, e = "".concat(e, "0");
            return e
        }

        function yt(e) {
            var t = new rt["a"];
            return t.setPublicKey(ot), t.encrypt(e)
        }

        function ht(e, t, n) {
            var a = JSON.parse(at.a.AES.decrypt(t.encryptedInfo, n).toString(at.a.enc.Utf8));
            e.inputName = a.name, e.inputEmail = a.email, e.inputBeneficiaryName = a.beneficiaryName, e.inputBeneficiaryEmail = a.beneficiaryEmail, e.inputBeneficiaryAddress = t.beneficiaryAddress, e.inputProofOfLife = Number(t.proofOfLifeThreshold) / 86400, e.status = t.status, e.testament = t
        }

        function gt(e, t, n, a, r) {
            var i = {
                name: e,
                email: t,
                beneficiaryName: n,
                beneficiaryEmail: a
            };
            return at.a.AES.encrypt(JSON.stringify(i), r).toString()
        }

        function Ot(e, t, n, r, i) {
            var s = null,
                c = !1,
                o = !1;

            function l() {
                null !== s && (clearInterval(s), s = null)
            }

            function u(e) {
                c || (c = !0, l(), i(e))
            }

            function d(e) {
                return m.apply(this, arguments)
            }

            function m() {
                return m = Object(a["a"])(regeneratorRuntime.mark((function t(n) {
                    var a;
                    return regeneratorRuntime.wrap((function(t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, e.eth.getTransactionReceipt(n);
                            case 2:
                                if (a = t.sent, !a) {
                                    t.next = 13;
                                    break
                                }
                                if (!a.status) {
                                    t.next = 12;
                                    break
                                }
                                if (l(), !o) {
                                    t.next = 8;
                                    break
                                }
                                return t.abrupt("return");
                            case 8:
                                o = !0, r(), t.next = 13;
                                break;
                            case 12:
                                u("Transaction failed. Please try again later.");
                            case 13:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))), m.apply(this, arguments)
            }
            t.send({
                from: n,
                value: 0
            }).on("transactionHash", (function(e) {
                s = setInterval((function() {
                    d(e)
                }), 5e3)
            })).on("error", u)
        }
        var vt = {
            11155111: "https://sepolia.infura.io/v3/"
            },
            wt = Object.keys(vt).map(Number),
            jt = new Ye.a({
                providerOptions: {
                    walletconnect: {
                        package: ze["a"],
                        options: {
                            rpc: vt
                        }
                    },
                    portis: {
                        package: Qe.a,
                        options: {
                            id: "a1c8672b-7b1c-476b-b3d0-41c27d575920",
                            network: {
                                nodeUrl: "https://sepolia.infura.io/v3/",
                                chainId: 30
                            }
                        }
                    },
                    torus: {
                        package: He["a"]
                    },
                    "custom-ledger": Xe["ledgerProviderOptions"],
                    "custom-dcent": _e["dcentProviderOptions"],
                    "custom-trezor": Object(We["a"])(Object(We["a"])({}, Ge["trezorProviderOptions"]), {}, {
                        options: {
                            manifestEmail: "info@iovlabs.org",
                            manifestAppUrl: "https://basic-sample.rlogin.identity.rifos.org/"
                        }
                    })
                },
                rpcUrls: vt,
                supportedChains: wt
            }),
            xt = {
                address: null,
                web3Instance: null,
                testamentContract: null,
                encryptionKey: null,
                connect: function() {
                    var e = this;
                    return Object(a["a"])(regeneratorRuntime.mark((function t() {
                        var n, a, r, i, s;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, jt.connect();
                                case 3:
                                    return n = t.sent, a = new $e.a(n.provider), t.next = 7, a.eth.getAccounts();
                                case 7:
                                    return r = t.sent[0], e.web3Instance = a, e.testamentServiceContract = new a.eth.Contract(it, st), t.next = 12, a.eth.personal.sign("Log-in to BuddyTestament", r);
                                case 12:
                                    return e.encryptionKey = t.sent, t.next = 15, e.testamentServiceContract.methods.testamentDetailsOf(r).call();
                                case 15:
                                    i = t.sent, Fe.instance.walletAddress = r, i.exists ? ht(Fe.instance, i, e.encryptionKey) : Fe.instance.testament = null, t.next = 26;
                                    break;
                                case 20:
                                    t.prev = 20, t.t0 = t["catch"](0), console.log(t.t0), s = t.t0, t.t0.message && (s = t.t0.message), Fe.instance.loadingError = s;
                                case 26:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 20]
                        ])
                    })))()
                }
            },
            Tt = window.jQuery,
            kt = {
                name: "App",
                data: function() {
                    return Fe.instance
                },
                computed: {
                    nameValid: function() {
                        return !ut(this.inputName)
                    },
                    emailValid: function() {
                        return !ut(this.inputEmail) && dt(this.inputEmail)
                    },
                    beneficiaryNameValid: function() {
                        return !ut(this.inputBeneficiaryName)
                    },
                    beneficiaryEmailValid: function() {
                        return !ut(this.inputBeneficiaryEmail) && dt(this.inputBeneficiaryEmail)
                    },
                    beneficiaryAddressValid: function() {
                        return !ut(this.inputBeneficiaryAddress) && mt(this.inputBeneficiaryAddress.toLowerCase())
                    },
                    formValid: function() {
                        return this.nameValid && this.emailValid && this.beneficiaryNameValid && this.beneficiaryEmailValid && this.beneficiaryAddressValid && Number(this.inputProofOfLife) >= 30
                    },
                    validDepositAmount: function() {
                        try {
                            var e = pt(this.inputDepositAmount.trim(), 18);
                            return "0" !== e.toString()
                        } catch (t) {
                            return !1
                        }
                    },
                    validWithdrawAmount: function() {
                        try {
                            var e = pt(this.inputWithdrawAmount.trim(), 18),
                                t = ft(this.testament.testamentBalance);
                            return "0" !== e.toString() && e.lte(t)
                        } catch (n) {
                            return !1
                        }
                    },
                    formattedTestamentAddress: function() {
                        return this.testament ? this.testament.testamentAddress.toLowerCase() : null
                    },
                    formattedUnlockTime: function() {
                        if (this.testament) {
                            var e = Number(this.testament.lastProofOfLifeTimestamp) + Number(this.testament.proofOfLifeThreshold),
                                t = new Date(1e3 * e);
                            return t.toISOString().replace("T", " ").replace(".000Z", "") + " UTC"
                        }
                        return ""
                    },
                    formattedBalance: function() {
                        var e = "0";
                        return this.testament && (e = String(this.testament.testamentBalance)), bt(ft(e), 18) + " SETH"
                    },
                    testamentStatusString: function() {
                        return this.testamentLocked ? "locked" : this.testamentUnlocked ? "unlocked for execution" : this.testamentCancelled ? "cancelled" : this.testamentExecuted ? "executed" : ""
                    },
                    testamentLocked: function() {
                        if (this.testament) {
                            var e = Math.floor((new Date).getTime() / 1e3),
                                t = e - this.testament.lastProofOfLifeTimestamp;
                            return "0" === this.testament.status && t <= this.testament.proofOfLifeThreshold
                        }
                        return !1
                    },
                    testamentNotifiable: function() {
                        if (this.testament) {
                            var e = Math.floor((new Date).getTime() / 1e3),
                                t = e - this.testament.lastProofOfLifeTimestamp;
                            return "0" === this.testament.status && t + ct >= this.testament.proofOfLifeThreshold
                        }
                        return !1
                    },
                    testamentUnlocked: function() {
                        if (this.testament) {
                            var e = Math.floor((new Date).getTime() / 1e3),
                                t = e - this.testament.lastProofOfLifeTimestamp;
                            return "0" === this.testament.status && t > this.testament.proofOfLifeThreshold
                        }
                        return !1
                    },
                    testamentCancelled: function() {
                        return this.testament && "1" === this.testament.status
                    },
                    testamentExecuted: function() {
                        return this.testament && "2" === this.testament.status
                    }
                },
                methods: {
                    formChanged: function(e) {
                        this.formInputChanged[e] = !0
                    },
                    setMaxWithdrawAmount: function() {
                        this.processing || (this.inputWithdrawAmount = bt(ft(this.testament.testamentBalance), 18))
                    },
                    setupTestament: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, i, s, c, o, l, u, d, m;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        d = function(e) {
                                            if (l.processing = !1, console.log(e), 4001 !== e.code && -1 === String(e).indexOf("Invalid JSON RPC response")) {
                                                var t = e;
                                                e.message && e.message.trim().length > 0 && (t = e.message), Tt("#errorMsg").text(t), Tt("#errorModal").modal("show")
                                            }
                                        }, n = e.inputName.trim(), r = e.inputEmail.trim(), i = e.inputBeneficiaryName.trim(), s = e.inputBeneficiaryEmail.trim(), c = e.inputBeneficiaryAddress.trim().toLowerCase(), o = 24 * Number(e.inputProofOfLife) * 3600, l = e, u = gt(n, r, i, s, xt.encryptionKey), e.processing = !0, m = yt(xt.encryptionKey), Ot(xt.web3Instance, xt.testamentServiceContract.methods.setupTestament(c, o, m, u), e.walletAddress, Object(a["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, xt.testamentServiceContract.methods.testamentDetailsOf(l.walletAddress).call();
                                                    case 3:
                                                        t = e.sent, ht(l, t, xt.encryptionKey), l.processing = !1, l.editMode = !1, e.next = 12;
                                                        break;
                                                    case 9:
                                                        e.prev = 9, e.t0 = e["catch"](0), d(e.t0);
                                                    case 12:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 9]
                                            ])
                                        }))), (function(e) {
                                            d(e)
                                        }));
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    editTestament: function() {
                        var e = this;
                        this.editMode = !0, this.$nextTick((function() {
                            return e.$refs.txtName.focus()
                        }))
                    },
                    cancelTestamentChanges: function() {
                        this.editMode = !1, ht(this, this.testament, xt.encryptionKey)
                    },
                    cancelTestament: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        r = function(e) {
                                            if (n.processing = !1, console.log(e), 4001 !== e.code && -1 === String(e).indexOf("Invalid JSON RPC response")) {
                                                var t = e;
                                                e.message && e.message.trim().length > 0 && (t = e.message), Tt("#errorMsg").text(t), Tt("#errorModal").modal("show")
                                            }
                                        }, n = e, e.processing = !0, Ot(xt.web3Instance, xt.testamentServiceContract.methods.cancelTestament(), e.walletAddress, Object(a["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, xt.testamentServiceContract.methods.testamentDetailsOf(n.walletAddress).call();
                                                    case 3:
                                                        t = e.sent, ht(n, t, xt.encryptionKey), n.cancelTestamentChanges(), n.processing = !1, e.next = 12;
                                                        break;
                                                    case 9:
                                                        e.prev = 9, e.t0 = e["catch"](0), r(e.t0);
                                                    case 12:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 9]
                                            ])
                                        }))), (function(e) {
                                            r(e)
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    reactivateTestament: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        r = function(e) {
                                            if (n.processing = !1, console.log(e), 4001 !== e.code && -1 === String(e).indexOf("Invalid JSON RPC response")) {
                                                var t = e;
                                                e.message && e.message.trim().length > 0 && (t = e.message), Tt("#errorMsg").text(t), Tt("#errorModal").modal("show")
                                            }
                                        }, n = e, e.processing = !0, Ot(xt.web3Instance, xt.testamentServiceContract.methods.reactivateTestament(), e.walletAddress, Object(a["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, xt.testamentServiceContract.methods.testamentDetailsOf(n.walletAddress).call();
                                                    case 3:
                                                        t = e.sent, ht(n, t, xt.encryptionKey), n.cancelTestamentChanges(), n.processing = !1, e.next = 12;
                                                        break;
                                                    case 9:
                                                        e.prev = 9, e.t0 = e["catch"](0), r(e.t0);
                                                    case 12:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 9]
                                            ])
                                        }))), (function(e) {
                                            r(e)
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    depositFunds: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var n, a, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return a = function(e) {
                                            if (n.processing = !1, console.log(e), 4001 !== e.code && -1 === String(e).indexOf("Invalid JSON RPC response")) {
                                                var t = e;
                                                e.message && e.message.trim().length > 0 && (t = e.message), Tt("#errorMsg").text(t), Tt("#errorModal").modal("show")
                                            }
                                        }, n = e, e.processing = !0, t.prev = 3, t.next = 6, xt.web3Instance.eth.sendTransaction({
                                            from: e.walletAddress,
                                            to: e.formattedTestamentAddress,
                                            value: pt(e.inputDepositAmount.trim(), 18).toString()
                                        });
                                    case 6:
                                        return t.next = 8, xt.testamentServiceContract.methods.testamentDetailsOf(e.walletAddress).call();
                                    case 8:
                                        r = t.sent, ht(e, r, xt.encryptionKey), n.cancelTestamentChanges(), n.inputDepositAmount = "", n.processing = !1, t.next = 18;
                                        break;
                                    case 15:
                                        t.prev = 15, t.t0 = t["catch"](3), a(t.t0);
                                    case 18:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 15]
                            ])
                        })))()
                    },
                    withdrawFunds: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        r = function(e) {
                                            if (n.processing = !1, console.log(e), 4001 !== e.code && -1 === String(e).indexOf("Invalid JSON RPC response")) {
                                                var t = e;
                                                e.message && e.message.trim().length > 0 && (t = e.message), Tt("#errorMsg").text(t), Tt("#errorModal").modal("show")
                                            }
                                        }, n = e, e.processing = !0, Ot(xt.web3Instance, xt.testamentServiceContract.methods.withdrawTestamentFunds(pt(e.inputWithdrawAmount.trim(), 18).toString()), e.walletAddress, Object(a["a"])(regeneratorRuntime.mark((function e() {
                                            var t;
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, xt.testamentServiceContract.methods.testamentDetailsOf(n.walletAddress).call();
                                                    case 3:
                                                        t = e.sent, ht(n, t, xt.encryptionKey), n.cancelTestamentChanges(), n.inputWithdrawAmount = "", n.processing = !1, e.next = 13;
                                                        break;
                                                    case 10:
                                                        e.prev = 10, e.t0 = e["catch"](0), r(e.t0);
                                                    case 13:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 10]
                                            ])
                                        }))), (function(e) {
                                            r(e)
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            },
            Ct = n("6b0d"),
            At = n.n(Ct);
        const St = At()(kt, [
            ["render", Ke]
        ]);
        var Et = St;

        function Bt() {
            return Nt.apply(this, arguments)
        }

        function Nt() {
            return Nt = Object(a["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function(e) {
                    while (1) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, xt.connect();
                        case 2:
                            Object(r["b"])(Et).mount("#app");
                        case 3:
                        case "end":
                            return e.stop()
                    }
                }), e)
            }))), Nt.apply(this, arguments)
        }
        Bt()
    },
    6: function(e, t) {},
    7: function(e, t) {},
    8: function(e, t) {},
    9: function(e, t) {}
});
//# sourceMappingURL=app.6ae5a2d7.js.map
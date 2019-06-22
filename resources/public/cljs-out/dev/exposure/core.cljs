(ns ^:figwheel-hooks exposure.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/exposure/core.cljs. Go ahead and edit it and see reloading in action.")

(defn multiply [a b] (* a b))


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

;; maps for f-stops
(def fstops {0 "f/.95" 1 "f/1" 2 "f/1.4" 3 "f/2.0" 4 "f/4.0" 5 "f/5.6" 6 "f/8"
             7 "f/11" 8 "f/16" 9 "f/22" 10 "f/32" 11 "f/45"})

(def develop {0 "N+4"
              1 "N+3"
              2 "N+2"
              3 "N+1"
              4 "N (normal)"
              5 "N-1"
              6 "N-2"
              7 "N-3"
              8 "N-4"})
 
(def smr (reagent/atom 4)) 
(def hmr (reagent/atom 8))

(defn exposure []
  [:div
   [:title "Zone System Calculator"]
   [:h1 "Zone System Calculator"]
   [:hr]
   [:h2 "Spot meter readings"]
   "Shadow meter reading: " 
   [:input {:type "button"
            :value "Open"
            :on-click #(swap! smr dec)}]
   [:input {:type "button"
            :value "Close"
            :on-click #(swap! smr inc)}]
   [:input {:type "text"
            :value (fstops @smr)}]

   [:p]
   "Highlight meter reading: "
   [:input {:type "button"
            :value "Open"
            :on-click #(swap! hmr dec)}]
   [:input {:type "button"
            :value "Close"
            :on-click #(swap! hmr inc)}]
   [:input {:type "text"
            :value (fstops @hmr)}]

   [:h2 "Solution"]
   "Dynamic range of scene is " (- @hmr @smr) " stops"
   [:p]
   "Expose at " (fstops (+ @smr 2)) " to place shadows in Zone 3"
   [:p]
   "Develop at " (develop (- @hmr @smr)) " so highlights fall in Zone 7"

   [:p]
   [:hr]
   [:a {:href "https://github.com/ob325"} "github.com/ob325"]])


(defn mount [el]
  (reagent/render-component [exposure] el))


(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)

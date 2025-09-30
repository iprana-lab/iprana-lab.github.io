---
layout: page
permalink: /research/
title: research
description:
nav: true
nav_order: 2
---

I focus on integrating `machine learning techniques within process systems engineering (PSE)`.
<!-- PSE encompasses a range of methods, including (i) Modeling/Simulation, (ii) Data Analytics for process monitoring, (iii) Process Design, (iv) Process Synthesis, (v) Optimization, and (vi) Control. These approaches address challenges across various engineering domains: (i) Energy Systems (Sustainability), (ii) Supply Chain Systems (Smart Manufacturing), (iii) Molecular Systems (Novel Materials), and (iv) Biosystems (Effective Healthcare). -->
The following visualization illustrates the role of PSE:
<div id="pse-radial-force"></div>
<!-- <div id="pse-radial-force" class="svg-container"></div> -->
<!-- Load D3 from CDN -->
<script src="https://d3js.org/d3.v7.min.js"></script>
<!-- Load your custom script -->
<script src="{{ '/assets/js/force-graph.js' | relative_url }}"></script>

**Below are some of my research topics, highlighting key areas of interest; this list is indicative and not exhaustive.**

---

### Graph Neural Network Based Analytics
Graph Neural Networks (GNNs) provide a powerful framework for process analytics by capturing complex interdependencies among variables that traditional models often overlook. Our research develops graph-based soft sensing methods for quality prediction in nonlinear and dynamic chemical processes. We address challenges such as `learning graph` structures when they are not known a priori and mitigating `non-injective aggregation` issues that can obscure neighborhood information. To improve accuracy and `interpretability`, we integrate temporal dynamics and propose end-to-end frameworks that jointly learn graph structures and model parameters, enabling `robust predictions` in noisy industrial environments.
<figure style="margin:20px auto; max-width:700px; text-align:center;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_850,q_auto,f_auto/gnn_b4bflg.png" 
       alt="Dynamic modeling" 
       style="width:100%; height:auto; border-radius:6px;">
  <figcaption style="font-size:0.9em; margin-top:5px;">
    Graph neural network based modeling
  </figcaption>
</figure>

---


### Modeling Dynamical System
Dynamic processes in engineering and natural systems often involve complex, high-dimensional interactions that evolve over time. `Data-driven modeling` provides a powerful way to capture these dynamics for monitoring, estimation, control, and optimization. Our research focuses on developing techniques based on `Koopman analysis` and `Dynamic Mode Decomposition (DMD)` to identify both full-order and reduced-order models from process data. We also devise methods for `real-time updates`, enabling models to adapt to evolving process behavior. The updates rely on efficient `Singular Value Decomposition (SVD)` strategies. These approaches are applicable to a wide range of dynamical systems, from chemical processes to environmental and industrial systems, and are particularly suited for large-scale, real-time applications.
<figure style="margin:20px auto; max-width:850px; text-align:center;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_850,q_auto,f_auto/modeling_bzs4gq.png" 
       alt="Dynamic modeling" 
       style="width:100%; height:auto; border-radius:6px;">
  <figcaption style="font-size:0.9em; margin-top:5px;">
    Real time update of dynamic models
    <a href="https://doi.org/10.1016/j.compchemeng.2024.108923" target="_blank" rel="noopener">
      (Prakash and Huang, 2024)
    </a>
  </figcaption>
</figure>

---

### Process Monitoring and Fault Detection
Fault detection is a critical requirement in industrial operations, where early identification of abnormal conditions ensures safety, reliability, and economic performance. Process data, however, is often noisy and requires `effective preprocessing` that integrates statistical techniques with `domain knowledge`, which is increasingly important not only for `feature engineering` but also for selecting appropriate hyperparameters. At the same time, supervised learning has shown promise; its dependence on large volumes of labeled fault data limits applicability in industrial settings, where such data are scarce. Simpler statistical models, e.g., `Principal Component Analysis (PCA)`, play an important role due to their `interpretability` and ability to capture dominant process trends, making them valuable for real-world monitoring applications.
<figure style="margin:20px auto; max-width:800px; text-align:center;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_850,q_auto,f_auto/fault_ghvhwk.png" 
       alt="Process Monitoring and Fault Detection" 
       style="width:100%; height:auto; border-radius:6px;">
</figure>

---

### Image Processing Based Process Analytics
Images offer a non-invasive way to monitor processes, especially in situations where inserting sensors is challenging. From simple `edge-detection methods` like the Sobel filter to advanced `convolutional neural networks (CNNs)`, a range of techniques can be applied to extract meaningful information. 
<figure style="margin:20px auto; max-width:700px; text-align:center;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_850,q_auto,f_auto/image_wtvdnr.png" 
       alt="Image Processing" 
       style="width:100%; height:auto; border-radius:6px;">
  <figcaption style="font-size:0.9em; margin-top:5px;">
    Level detection
  </figcaption>
</figure>

---

### Sensor Placement Design (SPD)
<!-- <figure style="float:right; width:450px; max-width:45%; margin:0 0 15px 15px;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_800,q_auto,f_auto/blr_odcyvb.png" 
       alt="Sensor Placement Design in water network" 
       style="width:100%; height:auto; display:block;">
  <figcaption style="text-align:center; font-size:0.9em;">
    SPD in water network 
    <a href="https://doi.org/10.1016/j.compchemeng.2023.108181" target="_blank" rel="noopener">
      (Prakash and Bhushan, 2020)
    </a>
  </figcaption>
</figure> -->
In the era of Industry 4.0, sensors generate vast amounts of critical process data, making optimal SPD an essential prerequisite for safer, more controlled, and efficient operations. We focus on designing SPD objectives using `variance` and `reliability` criteria for `fault detection, diagnosis`, and `variable estimation`. We developed measures that quantify system-wide behavior while allowing users to prioritize target system performance, unlike conventional approaches. Given that SPD is a `combinatorial optimization`, NP-hard problem, we design efficient solution strategies for SPD. `Hypergraph partitioning` further reduces computational complexity, making our approach scalable to large industrial systems.
<figure style="margin:20px auto; max-width:850px; text-align:center;">
  <img src="https://res.cloudinary.com/dlicxapkk/image/upload/w_850,q_auto,f_auto/spd_zx18jw.png" 
       alt="Sensor Placement Design in water network" 
       style="width:100%; height:auto; border-radius:6px;">
  <figcaption style="font-size:0.9em; margin-top:5px;">
    Sensor Placement Design in water network 
    <a href="https://doi.org/10.1016/j.compchemeng.2023.108181" target="_blank" rel="noopener">
      (Prakash and Bhushan, 2020)
    </a>
  </figcaption>
</figure>

<!-- ![A mushroom-head robot drinking bubble tea](https://res.cloudinary.com/dlicxapkk/image/upload/w_800,q_auto,f_auto/blr_odcyvb.png) -->

---

<!-- Detailed research projects will be populated soon  <i class="fa-solid fa-cloud-arrow-up"></i><i class="fa-solid fa-spinner"></i> -->

---
layout: page
title: Atlas of Philosophy of Science
description: Building a data-driven atlas of philosophy of science
img: assets/img/Phil_Sci_Atlas_Cover.png
importance: 1
category: work
---

Philosophy of science is the branch of philosophy that investigates science and its methods. I am currently realizing an **atlas of philosophy of science** based on a quantitative analysis of publications in the field. The atlas' core is the database **SOPHIS** (**S**ocial **O**bservatory of **Phi**losophy of **S**cience), the first version of which is currently [available](https://zenodo.org/records/17277030) in open-access on Zenodo.

SOPHIS allows multi-dimensional analyses of philosophy of science, including both the epistemic and social dimensions of the field. It currently covers 6,826 research articles appeared in 8 core philosophy of science journals between 2005 and 2019. SOPHIS is available both as a standard relational database and as a graph database.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Sophis_infographic.png" title="Sophis_info" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    SOPHIS metagraph, along with some stats about its content 
</div>



## Maps from the atlas

The atlas will include several visualizations and maps that allow to visually grasp the structure and dynamics of philosophy of science. Here you can find some examples.

### The social structure of philosophy of science

Find below a map of the *social layer* of contemporary philosophy of science, based on co-mention relationships: when two actors are mentioned together in the same acknowledgments, they are linked together. The more co-mentions two actors receive, the closer they will be placed on the map. Hover with the mouse over the nodes to open a box with further data and statistics about individual actort. Use the menu control to change the meaning of the size of nodes or the color. You can visualize for instance governing roles in professional associations or the gender distribution. By adjusting the resolution parameter, you can change the resolution of the clustering: the higher the parameter, the more communities are identified.

<iframe 
    allowfullscreen="true" 
    src="https://app.vosviewer.com/?json=https%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D1C2G_VLbGjeEXpKWayvw-P0W57y5HHVWW&simple_ui=true" 
    width="100%" height="75%"
    style="border: 1px solid #ddd; max-width: 1000px; min-height: 500px">
</iframe>

### Intellectual specialties

Find below a map of the *intellectual layer* of the field, based on bibliographic coupling: when two articles share at least one reference, they are linked together. The more references they share, the closer they are placed on the map. Hover with the mouse over the nodes to open a box with further data and statistics about individual articles.

<iframe 
    allowfullscreen="true" 
    src="https://app.vosviewer.com/?json=https://drive.google.com/uc?id=1CTq2g0JBMi2NbKvNcfs1rWbBKQS9Wj8s&simple_ui=true" 
    width="100%" height="75%"
    style="border: 1px solid #ddd; max-width: 1000px; min-height: 500px">
</iframe>

Specialties can be individuated at different levels of granularity, depending on the resolution of the clustering algorithm. The following alluvial plot shows the relationships between different clusters at different resolutions, from coarse to fine.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Sophis_alluvial.png" title="Sophis_info" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


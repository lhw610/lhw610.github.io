---
title: 'Hyeon Woo Lee'
layout: single
classes: wide
permalink: /projects/
author_profile: true
excerpt: |
    Problem-Solving Enthusiast <br />
    Self-Oriented Machine Learning Engineer
header:
  overlay_image: /images/background.jpg
  overlay_filter: 0.5
---

## Transfer Function
Allen Institute for Cell Science<br />
*Computational model that transfers 3D microscopic images between different magnification, different microscopic object, different resolution, and different light microscope modalities.*

I collaborated with computer scientists and biologist to develop a deep learning based open source toolkit, transfer function, where conditional GAN is implemented with pytorch. I also designed extensive validation tests to validate feasibility of the transfer function in R&D stage.<br />
*It will be released to [Allen Institute github repo.](https://github.com/AllenInstitute)*

## Allen Cell Structural Segmenter
Allen Institute for Cell Science<br />
*Python-based open source toolkit developed at the Allen Insttitue for Cell Science for 3D segmentation of intracellular structures in fluorescence microscopic image.*

[Allen Cell Structural Segmenter](https://www.allencell.org/segmenter.html) is powerful tool that can generate and curate training dataset, train deep learning model, and segment structures with trained model. Multiple modules and networks that I worked on are integrated into this open source toolkit. I developed and packaged deep learning-based cell pair detector by implementing Faster-RCNN. This framework is very versatile and can be applied to various types of cell detection tasks. With spatial data augmentation and variant form of DeeplabV3+, I developed a deep learning based 2D segmentation tool for the highly complex shaped cell structures.

<img src="/images/segmenter.png"  width="800" height="600">

## 3D Brain Segmentation with Multi-Atlas Segmentation
Sabuncu Lab, Cornell University<br />
*Proposed and implemented 3D segmentaiton algorithm using multi-atlas segmentation with sermi-supervised registration. The experiment was performed using brain MR images*

Worked with [Dr.Mert Sabuncu](http://sabuncu.engineering.cornell.edu/), associate professor at Cornell University, and [Dr.Adrian Dalca](http://www.mit.edu/~adalca/), assistant professor at Harvard Medical School and scientist at CSAIL MIT. We tackled biomedical image segmentation in the scenario of only a few labeled brain MR images. We proposed a straightforward implementation of efficient semi-supervised learning-based registration method, which we showcase in a multi-atlas segmentation framework ([Voxelmorph](https://github.com/voxelmorph/voxelmorph)). Second, through an extensive empirical study, we evaluate the performance of a [supervised segmentation approach, where the training images are augmented via random deformations](https://github.com/lhw610/3D_UNet_Segmentation). Surprisingly, we find that in both paradigms, accurate segmentation is generally possible even in the context of few labeled images.

<img src="/images/overall.jpg"  width="700" height="500">

## 3D Brain Tumor Segmentation
Wismueller Lab, University of Rochester Medical Center<br />
*Implemented various machine learning and image processing algorithms to segment brain turom from 3D Brain MR Images with MATLAB*

Worked with [Dr.Anas Abidin](https://scholar.google.com/citations?user=C1IIlf4AAAAJ&hl=en) as an undergraduate research assistant. I utilized classical machine learning algorithm to perform binary tumor segmentation for the Brain MR images. Super-pixel clustering and support vector machine were used for initial segmentation. After, conditional random field was used to perform pixel-wise refinement for tumor-classified super-pixel. The skull stripping was done with region-growing algorithm and FMRIB Software Library.


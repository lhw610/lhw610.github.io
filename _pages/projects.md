---
title: 'Hyeon Woo Lee'
layout: single
permalink: /projects/
author_profile: true
excerpt: 'Problem-Solving Enthusiast'
header:
  overlay_image: /images/background.jpg
  overlay_filter: 0.5
---

## Transfer Function
Allen Institute for Cell Science
*Computational model that transfers 3D microscopic images between different magnification, different microscopic object, different resolution, and different light microscope modalities.*

I collaborated with computer scientists and biologist to develop a deep learning based open source toolkit, transfer function, where conditional GAN is implemented with pytorch. I also designed extensive validation tests to validate feasibility of the transfer function in R&D stage.
*It will be released to github soon*

## Allen Cell Structural Segmenter
RAllen Institute for Cell Science
*Python-based open source toolskit developed at the Allen Insttitue for Cell Science for 3D segmentation of intracellular structures in fluorescence microscopic image.*

Allen Cell Structural Segmenter is powerful tools that people can easily pick up. It provides various tools for generating training dataset, datatset curation, deep learning model training, and prediciton. I developed and packaged deep learning-based cell pair detector by implementing Faster-RCNN to detect various cell strcutures. This framework is very versatile and can be applied to various types of cell detection tasks when training with correct datasets. I also developed a deep learning based 2D segmentation model for highly complex cell structure segmentation using spatial data augmentation and DeeplabV3+.

![Overview](/images/segmenter.png)
[Website](https://www.allencell.org/segmenter.html)
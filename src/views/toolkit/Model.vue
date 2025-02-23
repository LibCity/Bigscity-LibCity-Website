<template>
    <div class="container">
        <div class="header">
            <div style="padding-top: 20px;color: white;">
                <p style="margin: 20px 0 30px 130px; font-size: 60px">Model</p>
                <p style="margin: 0px 0 20px 130px; font-size: 30px">
                    LibCity supports 9 mainstream spatio-temporal data mining tasks <br>
                    and implements 83 commonly used intelligence algorithms.
                </p>
            </div>
        </div>

        <div class="content">
            <div>
                <p class="title">Model List</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <p>Up to now, LibCity supports 9 mainstream spatio-temporal data mining tasks:</p>
                <ul>
                    <li>Traffic Flow Prediction</li>
                    <li>Traffic Speed Prediction</li>
                    <li>On-Demand Service Prediction</li>
                    <li>Origin-Destination Matrix Prediction</li>
                    <li>Traffic Accidents Prediction</li>
                    <li>Trajectory Next-Location Prediction</li>
                    <li>Estimated Time of Arrival</li>
                    <li>Map Matching</li>
                    <li>Road Network Representation Learning</li>
                </ul>
                <p>Besides, LibCity has already implemented 82 commonly used intelligence algorithms. We summary the models in the following tables: </p>

                <a-divider style="font-size: 24px">Traffic Flow Prediction</a-divider>
                <model-table :content="flow"></model-table>
                <br>

                <a-divider style="font-size: 24px">Traffic Speed Prediction</a-divider>
                <model-table :content="speed"></model-table>
                <br>

                <a-divider style="font-size: 24px">On-Demand Service Prediction</a-divider>
                <model-table :content="demand"></model-table>
                <br>

                <a-divider style="font-size: 24px">Origin-Destination Matrix Prediction</a-divider>
                <model-table :content="od"></model-table>
                <br>

                <a-divider style="font-size: 24px">Traffic Accidents Prediction</a-divider>
                <model-table :content="accident"></model-table>
                <br>

                <a-divider style="font-size: 24px">Trajectory Next-Location Prediction</a-divider>
                <model-table :content="location"></model-table>
                <br>

                <a-divider style="font-size: 24px">Estimated Time of Arrival</a-divider>
                <model-table :content="eta"></model-table>
                <br>

                <a-divider style="font-size: 24px">Map Matching</a-divider>
                <model-table :content="mm"></model-table>
                <br>

                <a-divider style="font-size: 24px">Road Network Representation Learning</a-divider>
                <model-table :content="representation"></model-table>
                <br>

                <p class="title">Baselines</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <p>We have also implemented several baselines for different task:</p>
                <ul>
                    <li>For time series prediction: HA, VAR, SVR, ARIMA</li>
                    <li>For traffic flow/speed/demand prediction: AutoEncoder, RNN(FC-RNN), Seq2Seq, FNN</li>
                    <li>For trajectory next-location prediction: RNN</li>
                </ul>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import modelTable from './modelTable.vue'

    const flow = [
        {
            model: 'ST-ResNet',
            mlink: '#',
            from: 'AAAI',
            year: '2017',
            paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
            plink: 'https://arxiv.org/abs/1610.00081'
        },
        {
            model: 'ACFM',
            mlink: '#',
            from: 'ACM MM',
            year: '2018',
            paper: 'ACFM: A Dynamic Spatial-Temporal Network for Traffic Prediction',
            plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681'
        },
        {
            model: 'ASTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention Based Spatial-Temporal Graph Convolutional Networks for Traffic Flow Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'MSTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention Based Spatial-Temporal Graph Convolutional Networks for Traffic Flow Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'AGCRN',
            mlink: '#',
            from: 'NIPS',
            year: '2020',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842'
        },
        {
            model: 'Conv-GCN',
            mlink: '#',
            from: 'IET-ITS',
            year: '2020',
            paper: 'Multi-Graph Convolutional Network for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
            plink: 'https://arxiv.org/abs/2001.07512'
        },
        {
            model: 'STDN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Revisiting Spatial-Temporal Similarity: A Deep Learning Framework for Traffic Prediction',
            plink: 'https://arxiv.org/abs/1803.01254'
        },
        {
            model: 'STSGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'Spatial-Temporal Synchronous Graph Convolutional Networks: A New Framework for Spatial-Temporal Network Data Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/5438'
        },
        {
            model: 'ToGCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Topological Graph Convolutional Network-Based Urban Traffic Flow and Density Prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9247476'
        },
        {
            model: 'ResLSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Deep Learning Architecture for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9136910/'
        },
        {
            model: 'CRANN',
            mlink: '#',
            from: 'Applied Soft Computing',
            year: '2020',
            paper: 'A Spatio-Temporal Spot-Forecasting Framework forUrban Traffic Prediction',
            plink: 'https://arxiv.org/abs/2003.13977'
        },
        {
            model: 'Multi-STGCnet',
            mlink: '#',
            from: 'IJCNN',
            year: '2020',
            paper: 'Multi-STGCnet: A Graph Convolution Based Spatial-Temporal Framework for Subway Passenger Flow Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9207049'
        },
        {
            model: 'DGCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Dynamic Graph Convolution Network for Traffic Forecasting Based on Latent Network of Laplace Matrix Estimation',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9190068'
        },
        {
            model: 'DSAN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Preserving Dynamic Attention for Long-Term Spatial-Temporal Prediction',
            plink: 'https://dl.acm.org/doi/10.1145/3394486.3403046'
        },
        {
            model: 'STNN',
            mlink: '#',
            from: 'ICDM',
            year: '2017',
            paper: 'Spatio-Temporal Neural Networks for Space-Time Series Forecasting and Relations Discovery',
            plink: 'https://ieeexplore.ieee.org/document/8215543'
        },
        {
            model: 'ST-Norm',
            mlink: '#',
            from: 'KDD',
            year: '2021',
            paper: 'ST-Norm: Spatial and Temporal Normalization for Multi-variate Time Series Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3447548.3467330'
        },
        {
            model: 'STGODE',
            mlink: '#',
            from: 'KDD',
            year: '2021',
            paper: 'Spatial-Temporal Graph ODE Networks for Traffic Flow Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3447548.3467430'
        },
        {
            model: 'ESG',
            mlink: '#',
            from: 'KDD',
            year: '2022',
            paper: 'Learning the Evolutionary and Multi-scale Graph Structure for Multivariate Time Series Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3534678.3539274'
        },
        {
            model: 'FOGS',
            mlink: '#',
            from: 'IJCAI',
            year: '2022',
            paper: 'FOGS: First-Order Gradient Supervision with Learning-based Graph for Traffic Flow Forecasting',
            plink: 'https://vbn.aau.dk/en/publications/fogs-first-order-gradient-supervision-with-learning-based-graph-f'
        },
        {
            model: 'ST-TSNet',
            mlink: '#',
            from: 'IJCAI',
            year: '2022',
            paper: 'Spatial-temporal Transformer Network with Self-supervised Learning for Traffic Flow Prediction',
            plink: 'https://strl2022.github.io/files/paper1.pdf'
        },
        {
            model: 'SSTBAN',
            mlink: '#',
            from: 'ICDE',
            year: '2023',
            paper: 'Self-Supervised Spatial-Temporal Bottleneck Attentive Network for Efficient Long-term Traffic Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/10184658/'
        },
        {
            model: 'ASTGNN',
            mlink: '#',
            from: 'KDD',
            year: '2023',
            paper: 'Localised adaptive spatial-temporal graph neural network',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3580305.3599418'
        },
        {
            model: 'DSTAGNN',
            mlink: '#',
            from: 'PMLR',
            year: '2022',
            paper: 'Dstagnn: Dynamic spatial-temporal aware graph neural network for traffic flow forecasting',
            plink: 'https://proceedings.mlr.press/v162/lan22a'
        },
        {
            model: 'MultiSPANS',
            mlink: '#',
            from: 'WSDM',
            year: '2024',
            paper: 'Multispans: A multi-range spatial-temporal transformer network for traffic forecast via structural entropy optimization',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3616855.3635820'
        },
        {
            model: 'PDFormer',
            mlink: '#',
            from: 'AAAI',
            year: '2023',
            paper: 'Pdformer: Propagation delay-aware dynamic long-range transformer for traffic flow prediction',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/25556'
        },
        {
            model: 'RGSL',
            mlink: '#',
            from: 'IJCAI',
            year: '2022',
            paper: 'Regularized graph structure learning with semantic knowledge for multi-variates time-series forecasting',
            plink: 'https://arxiv.org/abs/2210.06126'
        },
        {
            model: 'STG-NCDE',
            mlink: '#',
            from: 'AAAI',
            year: '2022',
            paper: 'Graph neural controlled differential equations for traffic forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/20587'
        },
        {
            model: 'STPGCN',
            mlink: '#',
            from: 'TITS',
            year: '2022',
            paper: 'Spatial-temporal position-aware graph convolution networks for traffic flow forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9945663/'
        },
        {
            model: 'STSSL',
            mlink: '#',
            from: 'AAAI',
            year: '2023',
            paper: 'Spatio-temporal self-supervised learning for traffic flow prediction',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/25555'
        },
        {
            model: 'STWave',
            mlink: '#',
            from: 'ICDE',
            year: '2023',
            paper: 'When spatio-temporal meet wavelets: Disentangled traffic forecasting via efficient spectral graph attention networks',
            plink: 'https://ieeexplore.ieee.org/abstract/document/10184591/'
        },
        {
            model: 'SimST',
            mlink: '#',
            from: 'openreview',
            year: '2023',
            paper: 'SimST: A GNN-Free Spatio-Temporal Learning Framework for Traffic Forecasting',
            plink: 'https://openreview.net/forum?id=2ppuWD3dkie'
        },
        {
            model: 'TimeMixer',
            mlink: '#',
            from: 'ICLR',
            year: '2024',
            paper: 'Timemixer: Decomposable multiscale mixing for time series forecasting',
            plink: 'https://arxiv.org/abs/2405.14616'
        },
        {
            model: 'FreTS',
            mlink: '#',
            from: 'NIPS',
            year: '2023',
            paper: 'Frequency-domain MLPs are More Effective Learners in Time Series Forecasting',
            plink: 'https://proceedings.neurips.cc/paper_files/paper/2023/hash/f1d16af76939f476b5f040fd1398c0a3-Abstract-Conference.html'
        }
    ]

    const speed = [
        {
            model: 'DCRNN',
            mlink: '#',
            from: 'ICLR',
            year: '2018',
            paper: 'Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting',
            plink: 'https://arxiv.org/abs/1707.01926'
        },
        {
            model: 'STGCN',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'Spatio-Temporal Graph Convolutional Networks: A Deep Learning Framework for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/1709.04875'
        },
        {
            model: 'GWNET',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121'
        },
        {
            model: 'MTGNN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650'
        },
        {
            model: 'T-GCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'T-GCN: A Temporal Graph Convolutional Network for Traffic Prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/'
        },
        {
            model: 'TGC-LSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8917706'
        },
        {
            model: 'ATDM',
            mlink: '#',
            from: 'arXiv',
            year: '2020',
            paper: 'On the Inclusion of Spatial Information for Spatio-Temporal Neural Networks',
            plink: 'https://arxiv.org/abs/2007.07559'
        },
        {
            model: 'GMAN',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'GMAN:A Graph Multi-Attention Network for Traffic Prediction',
            plink: 'https://arxiv.org/abs/1911.08415'
        },
        {
            model: 'GTS',
            mlink: '#',
            from: 'ICLR',
            year: '2021',
            paper: 'Discrete Graph Structure Learning for Forecasting Multiple Time Series',
            plink: 'https://arxiv.org/abs/2101.06861'
        },
        {
            model: 'STAG-GCN',
            mlink: '#',
            from: 'CIKM',
            year: '2020',
            paper: 'Spatiotemporal Adaptive Gated Graph Convolution Network for Urban Traffic Flow Forecasting',
            plink: 'https://dl.acm.org/doi/10.1145/3340531.3411894'
        },
        {
            model: 'HGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'Hierarchical Graph Convolution Networks for Traffic Forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/16088'
        },
        {
            model: 'ST-MGAT',
            mlink: '#',
            from: 'ICTAI',
            year: '2020',
            paper: 'ST-MGAT: Spatial-Temporal Multi-Head Graph Attention Networks for Traffic Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9288309'
        },
        {
            model: 'DKFN',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2020',
            paper: 'Graph Convolutional Networks with Kalman Filtering for Traffic Prediction',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3397536.3422257'
        },
        {
            model: 'STTN',
            mlink: '#',
            from: 'arXiv',
            year: '2020',
            paper: 'Spatial-Temporal Transformer Networks for Traffic Flow Forecasting',
            plink: 'https://arxiv.org/abs/2001.02908'
        },
        {
            model: 'STAGGCN',
            mlink: '#',
            from: 'CIKM',
            year: '2020',
            paper: 'Spatio-temporal Adaptive Gated Graph Convolution Network for Urban Traffic Flow Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3340531.3411894'
        },
        {
            model: 'DMSTGCN',
            mlink: '#',
            from: 'KDD',
            year: '2021',
            paper: 'Dynamic and Multi-faceted Spatio-temporal Deep Learning for Traffic Speed Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3447548.3467275'
        },
        {
            model: 'STID',
            mlink: '#',
            from: 'CIKM',
            year: '2022',
            paper: 'Spatial-Temporal Identity: A Simple yet Effective Baseline for Multivariate Time Series Forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3511808.3557702'
        },
        {
            model: 'D2STGNN',
            mlink: '#',
            from: 'VLDB',
            year: '2022',
            paper: 'Decoupled Dynamic Spatial-Temporal Graph Neural Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2206.09112'
        },
        {
            model: 'HIEST',
            mlink: '#',
            from: 'CIKM',
            year: '2023',
            paper: 'Rethinking sensors modeling: Hierarchical information enhanced traffic forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3583780.3614910'
        },
        {
            model: 'MegaCRN',
            mlink: '#',
            from: 'AAAI',
            year: '2023',
            paper: 'Spatio-temporal meta-graph learning for traffic forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/25976'
        },
        {
            model: 'STAEFormer',
            mlink: '#',
            from: 'CIKM',
            year: '2023',
            paper: 'Spatio-temporal adaptive embedding makes vanilla transformer sota for traffic forecasting',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3583780.3615160'
        },
        {
            model: 'TESTAM',
            mlink: '#',
            from: 'ICLR',
            year: '2024',
            paper: 'TESTAM: A Time-Enhanced Spatio-Temporal Attention Model with Mixture of Experts',
            plink: 'https://arxiv.org/abs/2403.02600'
        },
        {
            model: 'Trafformer',
            mlink: '#',
            from: 'AAAI',
            year: '2023',
            paper: 'Trafformer: unify time and space in traffic prediction',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/25980'
        },
    ]

    const demand = [
        {
            model: 'DMVST-Net',
            mlink: '#',
            from: 'AAAI',
            year: '2018',
            paper: 'Deep Multi-View Spatial-Temporal Network for Taxi Demand Prediction',
            plink: 'https://arxiv.org/abs/1802.08714'
        },
        {
            model: 'STG2Seq',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Stg2seq: Spatial-temporal graph to sequence model for multi-step passenger demand forecasting',
            plink: 'https://arxiv.org/abs/1905.10069'
        },
        {
            model: 'CCRNN',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'Coupled Layer-wise Graph Convolution for Transportation Demand Prediction',
            plink: 'https://arxiv.org/abs/2012.08080'
        },
    ]

    const od = [
        {
            model: 'GEML',
            mlink: '#',
            from: 'SIGKDD',
            year: '2019',
            paper: 'Origin-Destination Matrix Prediction via Graph Convolution: a New Perspective of Passenger Demand Modeling',
            plink: 'https://dl.acm.org/doi/10.1145/3292500.3330877'
        },
        {
            model: 'CSTN',
            mlink: '#',
            from: 'TITS',
            year: '2019',
            paper: 'Contextualized Spatial-Temporal Network for Taxi Origin-Destination Demand Prediction',
            plink: 'https://arxiv.org/abs/1905.06335'
        },
    ]

    const accident = [
        {
            model: 'GSNet',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'GSNet: Learning Spatial-Temporal Correlations from Geographical and Semantic Aspects for Traffic Accident Risk Forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/16566'
        },
    ]

    const location = [
        {
            model: 'FPMC',
            mlink: '#',
            from: 'WWW',
            year: '2010',
            paper: 'Factorizing Personalized Markov Chains for Next-Basket Recommendation',
            plink: 'https://dl.acm.org/doi/10.1145/1772690.1772773'
        },
        {
            model: 'ST-RNN',
            mlink: '#',
            from: 'AAAI',
            year: '2016',
            paper: 'Predicting the Next Location: A Recurrent Model with Spatial and Temporal Contexts',
            plink: 'https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewPDFInterstitial/11900/11583'
        },
        {
            model: 'ATST-LSTM',
            mlink: '#',
            from: 'IEEE TSC',
            year: '2019',
            paper: 'An Attention-based Spatiotemporal LSTM Network for Next POI Recommendation',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8723186'
        },
        {
            model: 'Serm',
            mlink: '#',
            from: 'CIKM',
            year: '2017',
            paper: 'SERM: A Recurrent Model for Next Location Prediction in Semantic Trajectories',
            plink: 'https://dl.acm.org/doi/10.1145/3132847.3133056'
        },
        {
            model: 'DeepMove',
            mlink: '#',
            from: 'WWW',
            year: '2018',
            paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
            plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058'
        },
        {
            model: 'HST-LSTM',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'HST-LSTM: A Hierarchical Spatial-Temporal Long-Short Term Memory Network for Location Prediction',
            plink: 'https://www.ijcai.org/proceedings/2018/324'
        },
        {
            model: 'LSTPM',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'Where to Go Next: Modeling Long- and Short-Term User Preferences for Point-of-Interest Recommendation',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5353'
        },
        {
            model: 'GeoSAN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Geography-Aware Sequential Location Recommendation',
            plink: 'https://dl.acm.org/doi/pdf/10.1145/3394486.3403252'
        },
        {
            model: 'STAN',
            mlink: '#',
            from: 'WWW',
            year: '2021',
            paper: 'STAN: Spatio-Temporal Attention Network for Next Location Recommendation',
            plink: 'https://arxiv.org/abs/2102.04095'
        },
        {
            model: 'CARA',
            mlink: '#',
            from: 'SIGIR',
            year: '2018',
            paper: 'A Contextual Attention Recurrent Architecture for Context-Aware Venue Recommendation',
            plink: 'https://dl.acm.org/doi/10.1145/3209978.3210042'
        },
    ]

    const eta = [
        {
            model: 'DeepTTE',
            mlink: '#',
            from: 'AAAI',
            year: '2018',
            paper: 'When Will You Arrive? Estimating Travel Time Based on Deep Neural Networks',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/11877'
        },
        {
            model: 'TTPNet',
            mlink: '#',
            from: 'TKDE',
            year: '2020',
            paper: 'TTPNet: A Neural Network for Travel Time Prediction Based on Tensor Decomposition and Graph Embedding',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9261122'
        },
    ]

    const mm = [
        {
            model: 'ST-Matching',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2009',
            paper: 'Map-Matching for Low-Sampling-Rate GPS Trajectories',
            plink: 'https://dl.acm.org/doi/10.1145/1653771.1653820'
        },
        {
            model: 'IVMM',
            mlink: '#',
            from: 'MDM',
            year: '2010',
            paper: 'An Interactive-Voting Based Map Matching Algorithm',
            plink: 'https://ieeexplore.ieee.org/document/5489808'
        },
        {
            model: 'HMMM',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2009',
            paper: 'Hidden Markov map matching through noise and sparseness',
            plink: 'https://dl.acm.org/doi/10.1145/1653771.1653818'
        },
    ]

    const representation = [
        {
            model: 'ChebConv',
            mlink: '#',
            from: 'NIPS',
            year: '2016',
            paper: 'Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering',
            plink: 'https://arxiv.org/abs/1606.09375'
        },
        {
            model: 'LINE',
            mlink: '#',
            from: 'WWW',
            year: '2015',
            paper: 'LINE: Large-scale Information Network Embedding',
            plink: 'https://arxiv.org/abs/1503.03578'
        },
        {
            model: 'DeepWalk',
            mlink: '#',
            from: 'KDD',
            year: '2014',
            paper: 'DeepWalk: Online Learning of Social Representations',
            plink: 'https://dl.acm.org/doi/abs/10.1145/2623330.2623732'
        },
        {
            model: 'Node2Vec',
            mlink: '#',
            from: 'KDD',
            year: '2016',
            paper: 'node2vec: Scalable Feature Learning for Networks',
            plink: 'https://dl.acm.org/doi/abs/10.1145/2939672.2939754'
        },
        {
            model: 'GAT',
            mlink: '#',
            from: 'ICLR',
            year: '2018',
            paper: 'Graph Attention Networks',
            plink: 'https://arxiv.org/abs/1710.10903'
        },
        {
            model: 'GeomGCN',
            mlink: '#',
            from: 'ICLR',
            year: '2020',
            paper: 'Geom-GCN: Geometric Graph Convolutional Networks',
            plink: 'https://arxiv.org/abs/2002.05287'
        },
    ]

    export default {
        data() {
            return {
                flow,
                speed,
                demand,
                od,
                accident,
                location,
                eta,
                mm,
                representation,
            };
        },
        components: {
            modelTable
        }
    };
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: auto;
  /* border: red solid 1px; */
}
.header {
  width: 100%;
  min-height: 300px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
</style>

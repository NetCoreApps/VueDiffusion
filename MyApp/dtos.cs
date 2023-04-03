/* Options:
Date: 2023-04-03 12:02:37
Version: 6.81
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

GlobalNamespace: MyApp
//MakePartial: True
//MakeVirtual: True
//MakeInternal: False
//MakeDataContractsExtensible: False
//AddNullableAnnotations: False
//AddReturnMarker: True
//AddDescriptionAsComments: True
//AddDataContractAttributes: False
//AddIndexesToDataMembers: False
//AddGeneratedCodeAttributes: False
//AddResponseStatus: False
//AddImplicitVersion: 
//InitializeCollections: True
//ExportValueTypes: False
//IncludeTypes: 
//ExcludeTypes: 
//AddNamespaces: 
//AddDefaultXmlNamespace: http://schemas.servicestack.net/types
*/

using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization;
using ServiceStack;
using ServiceStack.DataAnnotations;
using MyApp;

namespace MyApp
{
    [ValidateRequest("IsAdmin")]
    public partial class AdminDeleteArtifactComment
        : IReturnVoid, IDeleteDb<ArtifactComment>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("IsAdmin")]
    public partial class AdminDeleteArtifactCommentReport
        : IReturnVoid, IDeleteDb<ArtifactCommentReport>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("IsAdmin")]
    public partial class AdminQueryArtifactCommentReports
        : QueryDb<ArtifactCommentReport>, IReturn<QueryResponse<ArtifactCommentReport>>
    {
    }

    [ValidateRequest("IsAdmin")]
    public partial class AdminQueryArtifactComments
        : QueryDb<ArtifactComment>, IReturn<QueryResponse<ArtifactComment>>
    {
    }

    [ValidateRequest("IsAdmin")]
    public partial class AdminUpdateArtifactComment
        : IReturn<ArtifactComment>, IPatchDb<ArtifactComment>
    {
        public virtual int Id { get; set; }
        public virtual int? ReplyId { get; set; }
        [Validate("Length(1,280)")]
        public virtual string Content { get; set; }

        public virtual string Notes { get; set; }
        public virtual string FlagReason { get; set; }
    }

    [ValidateRequest("IsAdmin")]
    public partial class AdminUpdateArtifactCommentReport
        : IReturn<ArtifactCommentReport>, IPatchDb<ArtifactCommentReport>
    {
        public virtual int Id { get; set; }
        public virtual PostReport? PostReport { get; set; }
        public virtual string Description { get; set; }
    }

    public partial class Album
        : AuditBase
    {
        public Album()
        {
            Tags = new List<string>{};
            Artifacts = new List<AlbumArtifact>{};
        }

        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Slug { get; set; }
        public virtual List<string> Tags { get; set; }
        public virtual string RefId { get; set; }
        [References(typeof(AppUser))]
        public virtual int OwnerId { get; set; }

        public virtual string OwnerRef { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual bool Private { get; set; }
        public virtual int? Rating { get; set; }
        public virtual int LikesCount { get; set; }
        public virtual int DownloadsCount { get; set; }
        public virtual int SearchCount { get; set; }
        public virtual int Score { get; set; }
        public virtual int Rank { get; set; }
        public virtual int? PrefColumns { get; set; }
        public virtual List<AlbumArtifact> Artifacts { get; set; }
    }

    public partial class AlbumArtifact
    {
        public virtual int Id { get; set; }
        [References(typeof(Album))]
        public virtual int AlbumId { get; set; }

        [References(typeof(Artifact))]
        public virtual int ArtifactId { get; set; }

        public virtual string Description { get; set; }
        public virtual DateTime CreatedDate { get; set; }
        public virtual DateTime ModifiedDate { get; set; }
        public virtual Artifact Artifact { get; set; }
    }

    public partial class AlbumLike
    {
        public virtual long Id { get; set; }
        [References(typeof(Album))]
        public virtual int AlbumId { get; set; }

        [References(typeof(AppUser))]
        public virtual int AppUserId { get; set; }

        public virtual DateTime CreatedDate { get; set; }
    }

    public partial class AlbumRef
    {
        public AlbumRef()
        {
            Tags = new List<string>{};
        }

        public virtual string RefId { get; set; }
        public virtual int OwnerId { get; set; }
        public virtual string Name { get; set; }
        public virtual string Slug { get; set; }
        public virtual string Description { get; set; }
        public virtual List<string> Tags { get; set; }
        public virtual string PrimaryArtifactRef { get; set; }
        public virtual int ArtifactsCount { get; set; }
    }

    public partial class AlbumResult
    {
        public AlbumResult()
        {
            ArtifactIds = new List<int>{};
        }

        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Slug { get; set; }
        public virtual string AlbumRef { get; set; }
        public virtual string OwnerRef { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual int Score { get; set; }
        public virtual List<int> ArtifactIds { get; set; }
    }

    public partial class AnonData
        : IReturn<AnonDataResponse>
    {
    }

    public partial class AnonDataResponse
    {
        public AnonDataResponse()
        {
            TopAlbums = new List<AlbumResult>{};
        }

        public virtual List<AlbumResult> TopAlbums { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    public partial class AppUser
    {
        public AppUser()
        {
            Meta = new Dictionary<string, string>{};
            Roles = new List<string>{};
            Permissions = new List<string>{};
        }

        public virtual int Id { get; set; }
        public virtual string UserName { get; set; }
        public virtual string DisplayName { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual string Handle { get; set; }
        public virtual string Company { get; set; }
        public virtual string Email { get; set; }
        public virtual string ProfileUrl { get; set; }
        public virtual string Avatar { get; set; }
        public virtual string LastLoginIp { get; set; }
        public virtual bool IsArchived { get; set; }
        public virtual DateTime? ArchivedDate { get; set; }
        public virtual DateTime? LastLoginDate { get; set; }
        public virtual string PhoneNumber { get; set; }
        public virtual DateTime? BirthDate { get; set; }
        public virtual string BirthDateRaw { get; set; }
        public virtual string Address { get; set; }
        public virtual string Address2 { get; set; }
        public virtual string City { get; set; }
        public virtual string State { get; set; }
        public virtual string Country { get; set; }
        public virtual string Culture { get; set; }
        public virtual string FullName { get; set; }
        public virtual string Gender { get; set; }
        public virtual string Language { get; set; }
        public virtual string MailAddress { get; set; }
        public virtual string Nickname { get; set; }
        public virtual string PostalCode { get; set; }
        public virtual string TimeZone { get; set; }
        public virtual Dictionary<string, string> Meta { get; set; }
        public virtual string PrimaryEmail { get; set; }
        public virtual List<string> Roles { get; set; }
        public virtual List<string> Permissions { get; set; }
        public virtual int? RefId { get; set; }
        public virtual string RefIdStr { get; set; }
        public virtual int InvalidLoginAttempts { get; set; }
        public virtual DateTime? LastLoginAttempt { get; set; }
        public virtual DateTime? LockedDate { get; set; }
        public virtual DateTime CreatedDate { get; set; }
        public virtual DateTime ModifiedDate { get; set; }
    }

    public partial class Artifact
        : AuditBase
    {
        public virtual int Id { get; set; }
        [References(typeof(Creative))]
        public virtual int CreativeId { get; set; }

        public virtual string FileName { get; set; }
        public virtual string FilePath { get; set; }
        public virtual string ContentType { get; set; }
        public virtual long ContentLength { get; set; }
        public virtual int Width { get; set; }
        public virtual int Height { get; set; }
        public virtual ulong Seed { get; set; }
        public virtual string Prompt { get; set; }
        public virtual bool? Nsfw { get; set; }
        public virtual long? AverageHash { get; set; }
        public virtual long? PerceptualHash { get; set; }
        public virtual long? DifferenceHash { get; set; }
        public virtual string Background { get; set; }
        public virtual string Lqip { get; set; }
        public virtual int Quality { get; set; }
        public virtual int LikesCount { get; set; }
        public virtual int AlbumsCount { get; set; }
        public virtual int DownloadsCount { get; set; }
        public virtual int SearchCount { get; set; }
        public virtual int TemporalScore { get; set; }
        public virtual int Score { get; set; }
        public virtual int Rank { get; set; }
        public virtual string RefId { get; set; }
    }

    public partial class ArtifactComment
        : AuditBase
    {
        public virtual int Id { get; set; }
        public virtual int ArtifactId { get; set; }
        public virtual int? ReplyId { get; set; }
        public virtual string Content { get; set; }
        public virtual int UpVotes { get; set; }
        public virtual int DownVotes { get; set; }
        public virtual int Votes { get; set; }
        public virtual string FlagReason { get; set; }
        public virtual string Notes { get; set; }
        public virtual string RefId { get; set; }
        public virtual int AppUserId { get; set; }
    }

    public partial class ArtifactCommentReport
    {
        public virtual long Id { get; set; }
        [References(typeof(ArtifactComment))]
        public virtual int ArtifactCommentId { get; set; }

        [References(typeof(AppUser))]
        public virtual int AppUserId { get; set; }

        public virtual PostReport PostReport { get; set; }
        public virtual string Description { get; set; }
        public virtual DateTime CreatedDate { get; set; }
    }

    public partial class ArtifactCommentVote
    {
        public virtual long Id { get; set; }
        [References(typeof(ArtifactComment))]
        public virtual int ArtifactCommentId { get; set; }

        [References(typeof(AppUser))]
        public virtual int AppUserId { get; set; }

        public virtual int Vote { get; set; }
        public virtual DateTime CreatedDate { get; set; }
    }

    public partial class ArtifactLike
    {
        public virtual long Id { get; set; }
        [References(typeof(Artifact))]
        public virtual int ArtifactId { get; set; }

        [References(typeof(AppUser))]
        public virtual int AppUserId { get; set; }

        public virtual DateTime CreatedDate { get; set; }
    }

    public partial class ArtifactReport
    {
        public virtual long Id { get; set; }
        [References(typeof(Artifact))]
        public virtual int ArtifactId { get; set; }

        [References(typeof(AppUser))]
        public virtual int AppUserId { get; set; }

        public virtual Artifact Artifact { get; set; }
        public virtual ReportType Type { get; set; }
        public virtual string Description { get; set; }
        public virtual DateTime CreatedDate { get; set; }
        public virtual string Notes { get; set; }
        public virtual DateTime? ActionedDate { get; set; }
        public virtual string ActionedBy { get; set; }
    }

    public partial class ArtifactResult
        : Artifact
    {
        public ArtifactResult()
        {
            ArtistNames = new List<string>{};
            ModifierNames = new List<string>{};
        }

        public virtual string UserPrompt { get; set; }
        public virtual List<string> ArtistNames { get; set; }
        public virtual List<string> ModifierNames { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual string OwnerRef { get; set; }
        public virtual double? Similarity { get; set; }
    }

    public partial class ArtifactStat
        : StatBase
    {
        public virtual int Id { get; set; }
        public virtual StatType Type { get; set; }
        public virtual int ArtifactId { get; set; }
        public virtual string Source { get; set; }
        public virtual string Version { get; set; }
    }

    public partial class Artist
        : AuditBase
    {
        public Artist()
        {
            Type = new List<string>{};
        }

        public virtual int Id { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual int? YearDied { get; set; }
        public virtual List<string> Type { get; set; }
        public virtual int Score { get; set; }
        public virtual int Rank { get; set; }
    }

    public partial class ArtistInfo
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Type { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CheckQuota
        : IReturn<CheckQuotaResponse>
    {
        public virtual int Images { get; set; }
        public virtual int Width { get; set; }
        public virtual int Height { get; set; }
    }

    public partial class CheckQuotaResponse
    {
        public virtual TimeSpan TimeRemaining { get; set; }
        public virtual int CreditsUsed { get; set; }
        public virtual int CreditsRequested { get; set; }
        public virtual int CreditsRemaining { get; set; }
        public virtual int DailyQuota { get; set; }
        public virtual string RequestedDetails { get; set; }
    }

    public partial class CommentResult
    {
        public virtual int Id { get; set; }
        public virtual int ArtifactId { get; set; }
        public virtual int? ReplyId { get; set; }
        public virtual string Content { get; set; }
        public virtual int UpVotes { get; set; }
        public virtual int DownVotes { get; set; }
        public virtual int Votes { get; set; }
        public virtual string FlagReason { get; set; }
        public virtual string Notes { get; set; }
        public virtual int AppUserId { get; set; }
        public virtual string DisplayName { get; set; }
        public virtual string Handle { get; set; }
        public virtual string ProfileUrl { get; set; }
        public virtual string Avatar { get; set; }
        public virtual DateTime CreatedDate { get; set; }
        public virtual DateTime ModifiedDate { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateAlbum
        : IReturn<Album>, ICreateDb<Album>
    {
        [Validate("NotEmpty")]
        public virtual string Name { get; set; }

        public virtual string Description { get; set; }
        public virtual List<string> Tags { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual List<int> ArtifactIds { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateAlbumLike
        : IReturn<IdResponse>, ICreateDb<AlbumLike>
    {
        [Validate("GreaterThan(0)")]
        public virtual int AlbumId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateArtifactComment
        : IReturn<ArtifactComment>, ICreateDb<ArtifactComment>
    {
        public virtual int ArtifactId { get; set; }
        public virtual int? ReplyId { get; set; }
        [Validate("Length(1,280)")]
        public virtual string Content { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateArtifactCommentReport
        : IReturnVoid, ICreateDb<ArtifactCommentReport>
    {
        public virtual int ArtifactCommentId { get; set; }
        public virtual PostReport PostReport { get; set; }
        public virtual string Description { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateArtifactCommentVote
        : IReturnVoid, ICreateDb<ArtifactCommentVote>
    {
        public virtual int ArtifactCommentId { get; set; }
        [Validate("InclusiveBetween(-1,1)")]
        public virtual int Vote { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateArtifactLike
        : IReturn<IdResponse>, ICreateDb<ArtifactLike>
    {
        [Validate("GreaterThan(0)")]
        public virtual int ArtifactId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateArtifactReport
        : IReturn<ArtifactReport>, ICreateDb<ArtifactReport>
    {
        [Validate("GreaterThan(0)")]
        public virtual int ArtifactId { get; set; }

        public virtual ReportType Type { get; set; }
        public virtual string Description { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class CreateArtist
        : IReturn<Artist>, ICreateDb<Artist>
    {
        public virtual string FirstName { get; set; }
        [Validate("NotEmpty")]
        [Required]
        public virtual string LastName { get; set; }

        public virtual int? YearDied { get; set; }
        public virtual List<string> Type { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class CreateCreative
        : IReturn<CreateCreativeResponse>, ICreateDb<Creative>
    {
        [Required]
        public virtual string UserPrompt { get; set; }

        public virtual int? Images { get; set; }
        public virtual int? Width { get; set; }
        public virtual int? Height { get; set; }
        public virtual int? Steps { get; set; }
        public virtual long? Seed { get; set; }
        public virtual List<int> ArtistIds { get; set; }
        public virtual List<int> ModifierIds { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class CreateCreativeArtist
        : IReturn<CreativeArtist>, ICreateDb<CreativeArtist>
    {
        [Validate("GreaterThan(0)")]
        public virtual int? CreativeId { get; set; }

        [Validate("GreaterThan(0)")]
        public virtual int? ModifierId { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class CreateCreativeModifier
        : IReturn<CreativeModifier>, ICreateDb<CreativeModifier>
    {
        [Validate("GreaterThan(0)")]
        public virtual int? CreativeId { get; set; }

        [Validate("GreaterThan(0)")]
        public virtual int? ModifierId { get; set; }
    }

    public partial class CreateCreativeResponse
    {
        public virtual Creative Result { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class CreateModifier
        : IReturn<Modifier>, ICreateDb<Modifier>
    {
        [Validate("NotEmpty")]
        [Required]
        public virtual string Name { get; set; }

        [Validate("NotEmpty")]
        [Required]
        public virtual string Category { get; set; }

        public virtual string Description { get; set; }
    }

    public partial class CreateSignup
        : IReturn<EmptyResponse>, ICreateDb<Signup>
    {
        public virtual SignupType Type { get; set; }
        [Validate("NotEmpty")]
        [Validate("Email")]
        public virtual string Email { get; set; }

        public virtual string Name { get; set; }
    }

    [Route("/todos", "POST")]
    public partial class CreateTodo
        : IReturn<Todo>, IPost
    {
        [Validate("NotEmpty")]
        public virtual string Text { get; set; }
    }

    public partial class Creative
        : AuditBase
    {
        public Creative()
        {
            ArtistNames = new List<string>{};
            ModifierNames = new List<string>{};
            Artists = new List<CreativeArtist>{};
            Modifiers = new List<CreativeModifier>{};
            Artifacts = new List<Artifact>{};
        }

        public virtual int Id { get; set; }
        public virtual string UserPrompt { get; set; }
        public virtual string Prompt { get; set; }
        public virtual int Images { get; set; }
        public virtual int Width { get; set; }
        public virtual int Height { get; set; }
        public virtual int Steps { get; set; }
        public virtual int? CuratedArtifactId { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual List<string> ArtistNames { get; set; }
        public virtual List<string> ModifierNames { get; set; }
        public virtual List<CreativeArtist> Artists { get; set; }
        public virtual List<CreativeModifier> Modifiers { get; set; }
        public virtual List<Artifact> Artifacts { get; set; }
        public virtual string Error { get; set; }
        [References(typeof(AppUser))]
        public virtual int? OwnerId { get; set; }

        public virtual string OwnerRef { get; set; }
        public virtual string Key { get; set; }
        public virtual bool Curated { get; set; }
        public virtual int? Rating { get; set; }
        public virtual bool Private { get; set; }
        public virtual int Score { get; set; }
        public virtual int Rank { get; set; }
        public virtual string RefId { get; set; }
        public virtual string RequestId { get; set; }
        public virtual string EngineId { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class CreativeArtist
    {
        public virtual int Id { get; set; }
        [References(typeof(Creative))]
        public virtual int CreativeId { get; set; }

        [References(typeof(Artist))]
        public virtual int ArtistId { get; set; }

        public virtual Artist Artist { get; set; }
    }

    public partial class CreativeModifier
    {
        public virtual int Id { get; set; }
        [References(typeof(Creative))]
        public virtual int CreativeId { get; set; }

        [References(typeof(Modifier))]
        public virtual int ModifierId { get; set; }

        public virtual Modifier Modifier { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteAlbum
        : IReturnVoid, IDeleteDb<Album>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteAlbumLike
        : IReturnVoid, IDeleteDb<AlbumLike>
    {
        [Validate("GreaterThan(0)")]
        public virtual int AlbumId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteArtifactComment
        : IReturnVoid, IDeleteDb<ArtifactComment>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteArtifactCommentReport
        : IReturnVoid, IDeleteDb<ArtifactCommentReport>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteArtifactCommentVote
        : IReturnVoid, IDeleteDb<ArtifactCommentVote>
    {
        public virtual int ArtifactCommentId { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteArtifactHtml
    {
        public DeleteArtifactHtml()
        {
            Ids = new int[]{};
        }

        public virtual int[] Ids { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteArtifactLike
        : IReturnVoid, IDeleteDb<ArtifactLike>
    {
        [Validate("GreaterThan(0)")]
        public virtual int ArtifactId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    [ValidateRequest("IsAdmin")]
    public partial class DeleteArtifactReport
        : IReturnVoid, IDeleteDb<ArtifactReport>
    {
        [Validate("GreaterThan(0)")]
        public virtual int ArtifactId { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteArtist
        : IReturnVoid, IDeleteDb<Artist>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteCdnFile
        : IReturnVoid
    {
        public virtual string File { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteCdnFilesMq
    {
        public DeleteCdnFilesMq()
        {
            Files = new List<string>{};
        }

        public virtual List<string> Files { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class DeleteCreative
        : IReturnVoid, IDeleteDb<Creative>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteCreativeArtist
        : IReturnVoid, IDeleteDb<CreativeArtist>
    {
        public virtual int? Id { get; set; }
        public virtual int[] Ids { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteCreativeModifier
        : IReturnVoid, IDeleteDb<CreativeModifier>
    {
        public virtual int? Id { get; set; }
        public virtual int[] Ids { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteModifier
        : IReturnVoid, IDeleteDb<Modifier>
    {
        public virtual int Id { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class DeleteSignup
        : IReturnVoid, IDeleteDb<Signup>
    {
        public virtual int Id { get; set; }
    }

    [Route("/todos/{Id}", "DELETE")]
    public partial class DeleteTodo
        : IReturnVoid, IDelete
    {
        public virtual long Id { get; set; }
    }

    [Route("/todos", "DELETE")]
    public partial class DeleteTodos
        : IReturnVoid, IDelete
    {
        public DeleteTodos()
        {
            Ids = new List<long>{};
        }

        public virtual List<long> Ids { get; set; }
    }

    [Route("/download/artifact/{RefId}")]
    public partial class DownloadArtifact
        : IReturn<byte[]>, IGet
    {
        public virtual string RefId { get; set; }
    }

    [Route("/download/direct/{RefId}")]
    [ValidateRequest("IsAuthenticated")]
    public partial class DownloadDirect
    {
        public virtual string RefId { get; set; }
        public virtual string EncryptionMethod { get; set; }
        public virtual string AccessId { get; set; }
        public virtual string AccessKey { get; set; }
    }

    public partial class GetAlbumIds
        : IReturn<GetAlbumIdsResponse>
    {
    }

    public partial class GetAlbumIdsResponse
    {
        public GetAlbumIdsResponse()
        {
            Results = new List<int>{};
        }

        public virtual List<int> Results { get; set; }
    }

    public partial class GetAlbumRefs
        : IReturn<GetAlbumRefsResponse>
    {
    }

    public partial class GetAlbumRefsResponse
    {
        public GetAlbumRefsResponse()
        {
            Results = new List<AlbumRef>{};
        }

        public virtual List<AlbumRef> Results { get; set; }
    }

    public partial class GetAlbumResults
        : IReturn<GetAlbumResultsResponse>
    {
        public GetAlbumResults()
        {
            Ids = new List<int>{};
            RefIds = new List<string>{};
        }

        public virtual List<int> Ids { get; set; }
        public virtual List<string> RefIds { get; set; }
    }

    public partial class GetAlbumResultsResponse
    {
        public GetAlbumResultsResponse()
        {
            Results = new List<AlbumResult>{};
        }

        public virtual List<AlbumResult> Results { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class GetAlbumUserData
        : IReturn<GetAlbumUserDataResponse>, IGet
    {
        public virtual int AlbumId { get; set; }
    }

    public partial class GetAlbumUserDataResponse
    {
        public GetAlbumUserDataResponse()
        {
            LikedArtifacts = new List<int>{};
        }

        public virtual int AlbumId { get; set; }
        public virtual List<int> LikedArtifacts { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class GetArtifactUserData
        : IReturn<GetArtifactUserDataResponse>, IGet
    {
        public virtual int ArtifactId { get; set; }
    }

    public partial class GetArtifactUserDataResponse
    {
        public GetArtifactUserDataResponse()
        {
            UpVoted = new List<int>{};
            DownVoted = new List<int>{};
        }

        public virtual int ArtifactId { get; set; }
        public virtual bool Liked { get; set; }
        public virtual List<int> UpVoted { get; set; }
        public virtual List<int> DownVoted { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class GetCdnFile
    {
        public virtual string File { get; set; }
    }

    public partial class GetCreative
        : IReturn<GetCreativeResponse>, IGet
    {
        public virtual int? Id { get; set; }
        public virtual int? ArtifactId { get; set; }
    }

    public partial class GetCreativeResponse
    {
        public virtual Creative Result { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    ///<summary>
    ///Retrieve Albums containing at least one of creative Artifacts
    ///</summary>
    public partial class GetCreativesInAlbums
        : IReturn<GetCreativesInAlbumsResponse>, IGet
    {
        public virtual int CreativeId { get; set; }
    }

    public partial class GetCreativesInAlbumsResponse
    {
        public GetCreativesInAlbumsResponse()
        {
            Results = new List<AlbumResult>{};
        }

        public virtual List<AlbumResult> Results { get; set; }
    }

    public partial class GetUserInfo
        : IReturn<GetUserInfoResponse>
    {
        public virtual string RefId { get; set; }
    }

    public partial class GetUserInfoResponse
    {
        public virtual UserResult Result { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class GetUserProfile
        : IReturn<GetUserProfileResponse>
    {
    }

    public partial class GetUserProfileResponse
    {
        public virtual UserProfile Result { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class HardDeleteCreative
        : IReturnVoid, IDeleteDb<Creative>
    {
        public virtual int Id { get; set; }
    }

    public partial class Likes
    {
        public Likes()
        {
            ArtifactIds = new List<int>{};
            AlbumIds = new List<int>{};
        }

        public virtual List<int> ArtifactIds { get; set; }
        public virtual List<int> AlbumIds { get; set; }
    }

    public partial class Modifier
        : AuditBase
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Category { get; set; }
        public virtual string Description { get; set; }
        public virtual int Score { get; set; }
        public virtual int Rank { get; set; }
    }

    public partial class ModifierInfo
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Category { get; set; }
    }

    public enum PostReport
    {
        Offensive,
        Spam,
        Nudity,
        Illegal,
        Other,
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class QueryAlbumArtifacts
        : QueryDb<AlbumArtifact>, IReturn<QueryResponse<AlbumArtifact>>
    {
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class QueryAlbumLikes
        : QueryDb<AlbumLike>, IReturn<QueryResponse<AlbumLike>>
    {
    }

    public partial class QueryAlbums
        : QueryDb<Album>, IReturn<QueryResponse<Album>>
    {
        public virtual int? Id { get; set; }
        public virtual List<int> Ids { get; set; }
    }

    public partial class QueryArtifactComments
        : QueryDb<ArtifactComment, CommentResult>, IReturn<QueryResponse<CommentResult>>
    {
        public virtual int ArtifactId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class QueryArtifactCommentVotes
        : QueryDb<ArtifactCommentVote>, IReturn<QueryResponse<ArtifactCommentVote>>
    {
        public virtual int ArtifactId { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class QueryArtifactLikes
        : QueryDb<ArtifactLike>, IReturn<QueryResponse<ArtifactLike>>
    {
    }

    [ValidateRequest("IsAuthenticated")]
    [ValidateRequest("IsAdmin")]
    public partial class QueryArtifactReports
        : QueryDb<ArtifactReport>, IReturn<QueryResponse<ArtifactReport>>
    {
        public virtual int? ArtifactId { get; set; }
    }

    public partial class QueryArtifacts
        : QueryDb<Artifact>, IReturn<QueryResponse<Artifact>>
    {
        public virtual int? Id { get; set; }
        public virtual List<int> Ids { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class QueryArtifactStats
        : QueryDb<ArtifactStat>, IReturn<QueryResponse<ArtifactStat>>
    {
    }

    public partial class QueryArtists
        : QueryDb<Artist>, IReturn<QueryResponse<Artist>>
    {
    }

    public partial class QueryCreativeArtists
        : QueryDb<CreativeArtist>, IReturn<QueryResponse<CreativeArtist>>
    {
        public virtual int? CreativeId { get; set; }
        public virtual int? ModifierId { get; set; }
    }

    public partial class QueryCreativeModifiers
        : QueryDb<CreativeModifier>, IReturn<QueryResponse<CreativeModifier>>
    {
        public virtual int? CreativeId { get; set; }
        public virtual int? ModifierId { get; set; }
    }

    public partial class QueryCreatives
        : QueryDb<Creative>, IReturn<QueryResponse<Creative>>
    {
        public virtual int? Id { get; set; }
        public virtual string CreatedBy { get; set; }
        public virtual int? OwnerId { get; set; }
    }

    public partial class QueryModifiers
        : QueryDb<Modifier>, IReturn<QueryResponse<Modifier>>
    {
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class QuerySearchStats
        : QueryDb<SearchStat>, IReturn<QueryResponse<SearchStat>>
    {
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class QuerySignups
        : QueryDb<Signup>, IReturn<QueryResponse<Signup>>
    {
    }

    [Route("/todos", "GET")]
    public partial class QueryTodos
        : QueryData<Todo>, IReturn<QueryResponse<Todo>>
    {
        public virtual int? Id { get; set; }
        public virtual List<long> Ids { get; set; }
        public virtual string TextContains { get; set; }
    }

    [Route("/image/{Id}")]
    [Route("/artifacts/{Group}/{Slug}")]
    public partial class RenderArtifactHtml
        : IReturn<string>
    {
        public virtual int? Group { get; set; }
        public virtual int? Id { get; set; }
        public virtual string Slug { get; set; }
        public virtual bool? Save { get; set; }
    }

    public enum ReportType
    {
        Nsfw,
        Malformed,
        Blurred,
        LowQuality,
        Other,
    }

    public partial class SearchArtifacts
        : QueryDb<Artifact, ArtifactResult>, IReturn<QueryResponse<ArtifactResult>>
    {
        public virtual string Query { get; set; }
        public virtual string Similar { get; set; }
        public virtual string By { get; set; }
        public virtual string User { get; set; }
        public virtual string Show { get; set; }
        public virtual string Modifier { get; set; }
        public virtual string Artist { get; set; }
        public virtual string Album { get; set; }
        public virtual string Source { get; set; }
    }

    public partial class SearchData
        : IReturn<SearchDataResponse>
    {
    }

    public partial class SearchDataResponse
    {
        public SearchDataResponse()
        {
            Artists = new List<ArtistInfo>{};
            Modifiers = new List<ModifierInfo>{};
        }

        public virtual List<ArtistInfo> Artists { get; set; }
        public virtual List<ModifierInfo> Modifiers { get; set; }
    }

    public partial class SearchStat
        : StatBase
    {
        public virtual int Id { get; set; }
        public virtual string Query { get; set; }
        public virtual string Similar { get; set; }
        public virtual string User { get; set; }
        public virtual string Modifier { get; set; }
        public virtual string Artist { get; set; }
        public virtual string Album { get; set; }
        public virtual string Show { get; set; }
        public virtual string Source { get; set; }
        public virtual int? ArtifactId { get; set; }
        public virtual int? AlbumId { get; set; }
        public virtual int? ModifierId { get; set; }
        public virtual int? ArtistId { get; set; }
    }

    public partial class Signup
        : StatBase
    {
        public virtual int Id { get; set; }
        public virtual SignupType Type { get; set; }
        public virtual string Email { get; set; }
        public virtual string Name { get; set; }
        public virtual DateTime? CancelledDate { get; set; }
    }

    public enum SignupType
    {
        Updates,
        Beta,
    }

    public partial class StatBase
    {
        public virtual string RefId { get; set; }
        public virtual int? AppUserId { get; set; }
        public virtual string RawUrl { get; set; }
        public virtual string RemoteIp { get; set; }
        public virtual DateTime CreatedDate { get; set; }
    }

    public enum StatType
    {
        Download,
    }

    public partial class TestImageHtml
        : IReturnVoid
    {
    }

    public partial class Todo
    {
        public virtual long Id { get; set; }
        public virtual string Text { get; set; }
        public virtual bool IsFinished { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UpdateAlbum
        : IReturn<Album>, IPatchDb<Album>
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Slug { get; set; }
        public virtual List<string> Tags { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual bool? UnpinPrimaryArtifact { get; set; }
        public virtual List<int> AddArtifactIds { get; set; }
        public virtual List<int> RemoveArtifactIds { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UpdateAlbumArtifact
        : IReturn<Album>, IPatchDb<Album>
    {
        public virtual long Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Description { get; set; }
        public virtual string Slug { get; set; }
        public virtual List<string> Tags { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual List<int> AddArtifactIds { get; set; }
        public virtual List<int> RemoveArtifactIds { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class UpdateArtifact
        : IReturn<Artifact>, IPatchDb<Artifact>
    {
        public virtual int Id { get; set; }
        public virtual bool? Nsfw { get; set; }
        public virtual int? Quality { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UpdateArtifactComment
        : IReturn<ArtifactComment>, IPatchDb<ArtifactComment>
    {
        public virtual int Id { get; set; }
        public virtual string Content { get; set; }
    }

    [ValidateRequest("IsAdmin")]
    public partial class UpdateArtifactReport
        : IReturn<ArtifactReport>, IPatchDb<ArtifactReport>
    {
        [Validate("GreaterThan(0)")]
        public virtual int ArtifactId { get; set; }

        public virtual ReportType? Type { get; set; }
        public virtual string Description { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class UpdateArtist
        : IReturn<Artist>, IPatchDb<Artist>
    {
        public virtual int Id { get; set; }
        public virtual string FirstName { get; set; }
        public virtual string LastName { get; set; }
        public virtual int? YearDied { get; set; }
        public virtual List<string> Type { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UpdateCreative
        : IReturn<Creative>, IPatchDb<Creative>
    {
        public virtual int Id { get; set; }
        public virtual int? PrimaryArtifactId { get; set; }
        public virtual bool? UnpinPrimaryArtifact { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class UpdateModifier
        : IReturn<Modifier>, IPatchDb<Modifier>
    {
        public virtual int Id { get; set; }
        public virtual string Name { get; set; }
        public virtual string Category { get; set; }
        public virtual string Description { get; set; }
    }

    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class UpdateSignup
        : IReturn<Signup>, IPatchDb<Signup>
    {
        public virtual int Id { get; set; }
        public virtual SignupType? Type { get; set; }
        [Validate("Email")]
        public virtual string Email { get; set; }

        public virtual string Name { get; set; }
        public virtual DateTime? CancelledDate { get; set; }
    }

    [Route("/todos/{Id}", "PUT")]
    public partial class UpdateTodo
        : IReturn<Todo>, IPut
    {
        public virtual long Id { get; set; }
        [Validate("NotEmpty")]
        public virtual string Text { get; set; }

        public virtual bool IsFinished { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UpdateUserProfile
        : IReturn<UserProfile>, IUpdateDb<AppUser>
    {
        [Validate("NotEmpty")]
        public virtual string DisplayName { get; set; }

        public virtual string Avatar { get; set; }
        [Validate("MaximumLength(20)")]
        public virtual string Handle { get; set; }
    }

    [ValidateRequest("IsAuthenticated")]
    public partial class UserData
        : IReturn<UserDataResponse>
    {
    }

    public partial class UserDataResponse
    {
        public UserDataResponse()
        {
            Signups = new List<SignupType>{};
            Roles = new List<string>{};
        }

        public virtual UserResult User { get; set; }
        public virtual List<SignupType> Signups { get; set; }
        public virtual List<string> Roles { get; set; }
        public virtual ResponseStatus ResponseStatus { get; set; }
    }

    public partial class UserProfile
    {
        public virtual string DisplayName { get; set; }
        public virtual string Avatar { get; set; }
        public virtual string Handle { get; set; }
    }

    public partial class UserResult
    {
        public UserResult()
        {
            Albums = new List<AlbumResult>{};
        }

        public virtual string RefId { get; set; }
        public virtual string Handle { get; set; }
        public virtual string Avatar { get; set; }
        public virtual string ProfileUrl { get; set; }
        public virtual Likes Likes { get; set; }
        public virtual List<AlbumResult> Albums { get; set; }
    }

    [Route("/creative/metadata/{CreativeId}")]
    [ValidateRequest("HasRole(`Moderator`)")]
    public partial class ViewCreativeMetadata
        : IReturn<Creative>, IGet
    {
        [Validate("GreaterThan(0)")]
        public virtual int CreativeId { get; set; }
    }

}


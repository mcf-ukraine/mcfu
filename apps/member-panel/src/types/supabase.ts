export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _ActivityTypeToUser: {
        Row: {
          A: number
          B: number
        }
        Insert: {
          A: number
          B: number
        }
        Update: {
          A?: number
          B?: number
        }
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
      }
      ActivityType: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      SeparatedSubdivision: {
        Row: {
          acceptsOnlinePayments: boolean
          contacts: string
          createdAt: string
          feeAmount: number
          headName: string
          id: number
          isActive: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          acceptsOnlinePayments?: boolean
          contacts: string
          createdAt?: string
          feeAmount?: number
          headName: string
          id?: number
          isActive?: boolean
          name: string
          updatedAt: string
        }
        Update: {
          acceptsOnlinePayments?: boolean
          contacts?: string
          createdAt?: string
          feeAmount?: number
          headName?: string
          id?: number
          isActive?: boolean
          name?: string
          updatedAt?: string
        }
      }
      User: {
        Row: {
          accountType: Database["public"]["Enums"]["AccountType"]
          birthday: string | null
          clerkId: string
          createdAt: string
          email: string
          excludedReason: string | null
          firstName: string
          fullName: string | null
          id: number
          isExcluded: boolean
          isMembershipActive: boolean
          lastName: string
          membershipType: Database["public"]["Enums"]["MembershipType"]
          middleName: string | null
          phone: string | null
          separatedSubdivisionId: number
          updatedAt: string
        }
        Insert: {
          accountType?: Database["public"]["Enums"]["AccountType"]
          birthday?: string | null
          clerkId: string
          createdAt?: string
          email: string
          excludedReason?: string | null
          firstName: string
          fullName?: string | null
          id?: number
          isExcluded?: boolean
          isMembershipActive?: boolean
          lastName: string
          membershipType?: Database["public"]["Enums"]["MembershipType"]
          middleName?: string | null
          phone?: string | null
          separatedSubdivisionId: number
          updatedAt: string
        }
        Update: {
          accountType?: Database["public"]["Enums"]["AccountType"]
          birthday?: string | null
          clerkId?: string
          createdAt?: string
          email?: string
          excludedReason?: string | null
          firstName?: string
          fullName?: string | null
          id?: number
          isExcluded?: boolean
          isMembershipActive?: boolean
          lastName?: string
          membershipType?: Database["public"]["Enums"]["MembershipType"]
          middleName?: string | null
          phone?: string | null
          separatedSubdivisionId?: number
          updatedAt?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AccountType: "MEMBER" | "SERVICE"
      MembershipType: "FULL" | "REDUCED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
